import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { DataVerificationEngine } from '@/lib/data-accuracy/verification-engine';
import { PRIORITY_COUNTRIES } from '@/lib/data-accuracy/types';

export async function POST(request: NextRequest) {
  try {
    const { country, force_update } = await request.json();
    
    if (!country) {
      return NextResponse.json({ error: 'Country is required' }, { status: 400 });
    }
    
    console.log(`🚀 Starting data verification for ${country}`);
    
    // Check if we have recent verification data (unless force_update)
    if (!force_update) {
      try {
        const { data: existingData, error: fetchError } = await supabaseAdmin
          .from('country_data_verification')
          .select('*')
          .eq('country', country)
          .gte('last_updated', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Within last 24h
          .single();
        
        if (existingData && !fetchError) {
          return NextResponse.json({
            message: 'Using cached verification data',
            data: existingData,
            cached: true
          });
        }
      } catch (error) {
        console.log('No existing data found or table does not exist yet');
      }
    }
    
    // Run verification
    const engine = new DataVerificationEngine();
    const verificationResult = await engine.runFullVerification(country);
    
    // Generate quality report
    const qualityReport = await engine.generateDataQualityReport(country);
    
    // Store results in Supabase
    try {
      // Try update first, then insert if no rows updated
      const updatePayload = {
        country_code: verificationResult.country_code,
        confidence_score: verificationResult.confidence_score,
        sources: verificationResult.sources,
        verified_data: verificationResult.data,
        quality_report: qualityReport,
        last_updated: verificationResult.last_updated
      };
      
      const { data: updateData, error: updateError } = await supabaseAdmin
        .from('country_data_verification')
        .update(updatePayload)
        .eq('country', verificationResult.country)
        .select();
      
      if (!updateData || updateData.length === 0) {
        // No existing row — insert
        const { error: insertError } = await supabaseAdmin
          .from('country_data_verification')
          .insert({ country: verificationResult.country, ...updatePayload });
        if (insertError) console.error('Database insert error:', insertError);
      } else if (updateError) {
        console.error('Database update error:', updateError);
      }
    } catch (error) {
      console.error('Failed to store verification results (table may not exist yet):', error);
    }
    
    // Log verification event for analytics
    await supabaseAdmin
      .from('analytics_events')
      .insert({
        event_type: 'data_verification',
        properties: {
          country,
          confidence_score: verificationResult.confidence_score,
          sources_count: verificationResult.sources.length,
          force_update
        },
        session_id: 'system_verification',
        timestamp: new Date().toISOString()
      });
    
    return NextResponse.json({
      message: 'Data verification completed',
      data: verificationResult,
      quality_report: qualityReport,
      cached: false
    });
    
  } catch (error) {
    console.error('Data verification error:', error);
    return NextResponse.json(
      { error: 'Verification failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET endpoint for retrieving verification data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get('country');
    const include_quality = searchParams.get('include_quality') === 'true';
    
    if (country) {
      // Get specific country data
      try {
        const { data, error } = await supabaseAdmin
          .from('country_data_verification')
          .select('*')
          .eq('country', country)
          .single();
        
        if (error || !data) {
          return NextResponse.json({ error: 'Country data not found or table does not exist yet' }, { status: 404 });
        }
        
        return NextResponse.json({
          data,
          quality_included: include_quality
        });
      } catch (error) {
        return NextResponse.json({ error: 'Database table may not exist yet' }, { status: 404 });
      }
      
    } else {
      // Get all countries summary
      try {
        const { data, error } = await supabaseAdmin
          .from('country_data_verification')
          .select('country, country_code, confidence_score, last_updated')
          .order('confidence_score', { ascending: false });
        
        if (error) {
          console.error('Database fetch error (table may not exist yet):', error);
          // Return mock data if table doesn't exist
          return NextResponse.json({
            verified: [],
            unverified: PRIORITY_COUNTRIES.map(c => ({
              country: c.name,
              country_code: c.code,
              confidence_score: 0,
              last_updated: null,
              status: 'pending_verification'
            })),
            total_countries: PRIORITY_COUNTRIES.length,
            verified_count: 0
          });
        }

        // Add PRIORITY_COUNTRIES that haven't been verified yet
        const verifiedCountries = data.map(d => d.country.toLowerCase());
        const unverified = PRIORITY_COUNTRIES
          .filter(c => !verifiedCountries.includes(c.name.toLowerCase()))
          .map(c => ({
            country: c.name,
            country_code: c.code,
            confidence_score: 0,
            last_updated: null,
            status: 'pending_verification'
          }));
        
        return NextResponse.json({
          verified: data,
          unverified,
          total_countries: PRIORITY_COUNTRIES.length,
          verified_count: data.length
        });

      } catch (error) {
        console.error('Database error (table may not exist yet):', error);
        // Return mock data
        return NextResponse.json({
          verified: [],
          unverified: PRIORITY_COUNTRIES.map(c => ({
            country: c.name,
            country_code: c.code,
            confidence_score: 0,
            last_updated: null,
            status: 'pending_verification'
          })),
          total_countries: PRIORITY_COUNTRIES.length,
          verified_count: 0
        });
      }
    }
    
  } catch (error) {
    console.error('Data retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve data' },
      { status: 500 }
    );
  }
}