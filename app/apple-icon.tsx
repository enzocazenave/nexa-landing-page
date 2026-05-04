import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#05080F',
          color: '#FFFFFF',
          fontSize: 100,
          fontWeight: 800,
          letterSpacing: '-0.05em',
          fontFamily: 'sans-serif',
        }}
      >
        N<span style={{ color: '#2DD4BF' }}>.</span>
      </div>
    ),
    { ...size },
  )
}
