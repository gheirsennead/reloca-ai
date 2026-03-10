import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const countryFlags: Record<string, string> = {
  'BRAZIL': '🇧🇷', 'ARGENTINA': '🇦🇷', 'PARAGUAY': '🇵🇾', 'URUGUAY': '🇺🇾',
  'PANAMA': '🇵🇦', 'EL SALVADOR': '🇸🇻', 'COSTA RICA': '🇨🇷', 'MEXICO': '🇲🇽',
  'COLOMBIA': '🇨🇴', 'ECUADOR': '🇪🇨', 'CHILE': '🇨🇱', 'PERU': '🇵🇪', 'BOLIVIA': '🇧🇴',
  'PORTUGAL': '🇵🇹', 'SPAIN': '🇪🇸', 'ITALY': '🇮🇹', 'GREECE': '🇬🇷',
  'MALTA': '🇲🇹', 'CYPRUS': '🇨🇾', 'ESTONIA': '🇪🇪', 'ANDORRA': '🇦🇩',
  'SINGAPORE': '🇸🇬', 'DUBAI': '🇦🇪', 'UAE': '🇦🇪', 'THAILAND': '🇹🇭', 'MALAYSIA': '🇲🇾',
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get('country') || 'Brazil';
    const score = searchParams.get('score') || '85';
    const name = searchParams.get('name') || '';
    
    const safeCountry = String(country).slice(0, 50);
    const safeScore = Math.min(100, Math.max(0, parseInt(score, 10) || 85));
    const safeName = String(name).slice(0, 30);
    
    const flag = countryFlags[safeCountry.toUpperCase()] || '🌎';
    const displayCountry = safeCountry.charAt(0).toUpperCase() + safeCountry.slice(1).toLowerCase();
    const header = safeName ? `${safeName}'s #1 Country Match` : 'My #1 Country Match';

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
            background: 'linear-gradient(135deg, #0D9488, #0EA5E9, #6366F1)',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            position: 'relative',
          }}
        >
          {/* Header */}
          <div
            style={{
              fontSize: '24px',
              letterSpacing: '0.15em',
              opacity: 0.9,
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            {header}
          </div>

          {/* Flag */}
          <div
            style={{
              fontSize: '120px',
              margin: '20px 0',
            }}
          >
            {flag}
          </div>

          {/* Country */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              marginBottom: '30px',
            }}
          >
            {displayCountry}
          </div>

          {/* Score */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '24px',
              padding: '12px 48px',
              margin: '20px 0',
              backdropFilter: 'blur(10px)',
            }}
          >
            {safeScore}% Match
          </div>

          {/* CTA */}
          <div
            style={{
              fontSize: '28px',
              opacity: 0.85,
              marginTop: '20px',
            }}
          >
            Find yours → reloca.ai
          </div>

          {/* Reloca.ai Logo in corner */}
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '40px',
              fontSize: '18px',
              opacity: 0.7,
            }}
          >
            Reloca.ai
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('OG image generation failed:', error);
    
    // Fallback image
    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0D9488, #0EA5E9)',
            color: 'white',
            fontSize: '48px',
            fontWeight: 'bold',
          }}
        >
          Find Your Perfect Country Match — Reloca.ai
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}