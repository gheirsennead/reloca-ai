import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const countryNames: Record<string, { name: string; flag: string }> = {
  'BR': { name: 'Brazil', flag: '🇧🇷' }, 'AR': { name: 'Argentina', flag: '🇦🇷' },
  'PY': { name: 'Paraguay', flag: '🇵🇾' }, 'UY': { name: 'Uruguay', flag: '🇺🇾' },
  'PA': { name: 'Panama', flag: '🇵🇦' }, 'SV': { name: 'El Salvador', flag: '🇸🇻' },
  'CR': { name: 'Costa Rica', flag: '🇨🇷' }, 'MX': { name: 'Mexico', flag: '🇲🇽' },
  'CO': { name: 'Colombia', flag: '🇨🇴' }, 'EC': { name: 'Ecuador', flag: '🇪🇨' },
  'CL': { name: 'Chile', flag: '🇨🇱' }, 'PT': { name: 'Portugal', flag: '🇵🇹' },
  'ES': { name: 'Spain', flag: '🇪🇸' }, 'IT': { name: 'Italy', flag: '🇮🇹' },
  'GR': { name: 'Greece', flag: '🇬🇷' }, 'MT': { name: 'Malta', flag: '🇲🇹' },
  'CY': { name: 'Cyprus', flag: '🇨🇾' }, 'AD': { name: 'Andorra', flag: '🇦🇩' },
  'SG': { name: 'Singapore', flag: '🇸🇬' }, 'AE': { name: 'Dubai', flag: '🇦🇪' },
  'TH': { name: 'Thailand', flag: '🇹🇭' }, 'MY': { name: 'Malaysia', flag: '🇲🇾' },
  'EE': { name: 'Estonia', flag: '🇪🇪' },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') || 'PT';
  const score = searchParams.get('score') || '85';
  
  const data = countryNames[country.toUpperCase()] || { name: country, flag: '🌎' };

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0d9488 0%, #2563eb 50%, #4f46e5 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: '24px', opacity: 0.9, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '3px' }}>
          #1 Country Match
        </div>
        <div style={{ fontSize: '100px', marginBottom: '16px' }}>
          {data.flag}
        </div>
        <div style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '24px' }}>
          {data.name}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          border: '8px solid rgba(255,255,255,0.3)',
          marginBottom: '24px',
        }}>
          <div style={{ fontSize: '56px', fontWeight: 'bold' }}>{score}%</div>
        </div>
        <div style={{ fontSize: '20px', opacity: 0.75, marginBottom: '32px' }}>
          Compatibility Score
        </div>
        <div style={{ fontSize: '28px', fontWeight: 'bold' }}>
          Find yours → reloca.ai
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
