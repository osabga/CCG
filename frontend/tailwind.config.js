/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        darkblue: {
          DEFAULT: '#141727',
          'light': '#2C3262',
        },
      },
      'custom-purple': '#C977D6', // Here is your custom purple color
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(180deg, #602EA6 0%, #2C3262 52.41%);',
        'gradient-to-c': 'linear-gradient(180deg, #C977D6 0%, #2C3262 52.41%);',
        'gradient-to-d': 'linear-gradient(90deg, #141727 0%, #2C3262 52.41%);',
        'gradient-to-e': 'linear-gradient(90deg, #141727 0%, #2C3262 52.41%);',

      },
    },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.admin-button': {
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '14px 26px',
          gap: '10px',
          height: '38px',
          background: 'linear-gradient(180deg, rgba(254, 200, 241, 0.9) -22.92%, rgba(237, 146, 215, 0) 26.73%), radial-gradient(116.32% 95.63% at 76.68% 66.67%, rgba(96, 46, 166, 0) 0%, rgba(201, 119, 214, 0.5) 100%)',
          backgroundBlendMode: 'overlay, normal',
          boxShadow: 'inset 0px -1px 8px #9375B6, inset 0px 0px 5px #FFACE4',
          filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.1))',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
          fontWeight: '500',
          fontSize: '16px',
        },
        '.hero-blur': {
          width: '145px',
          height: '48px',
          background: 'conic-gradient(from 180deg at 50% 50%, #5137AE -40.48deg, #6C35AF 107.08deg, #CC75DB 177.49deg, #5137AE 319.52deg, #6C35AF 467.08deg)',
          filter: 'blur(17px)',
          borderRadius: '10px',
        },
        '.hero-title': {
          height: '180px',
          fontFamily: '\'Inter\', sans-serif',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '80px',
          lineHeight: '90px',
          background: 'linear-gradient(76.27deg, #CC51D6 -2.26%, rgba(90, 104, 232, 0.6) 28.13%, #E1B1FF 53.17%), linear-gradient(114.08deg, #FFFFFF 4%, rgba(255, 255, 255, 0.5) 75.12%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          backgroundBlendMode: 'normal, overlay, overlay',
        },
        '.hero-subtitle': {
          height: '100px',
          fontFamily: '\'Inter\', sans-serif',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '60px',
          lineHeight: '90px',
          background: 'linear-gradient(76.27deg, #CC51D6 -2.26%, rgba(90, 104, 232, 0.6) 28.13%, #E1B1FF 53.17%), linear-gradient(114.08deg, #FFFFFF 4%, rgba(255, 255, 255, 0.5) 75.12%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          backgroundBlendMode: 'normal, overlay, overlay',
        },

        '.hero-image-blur': {
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(76, 57, 146, 0.86) -40.48deg, rgba(82, 38, 136, 0) 107.08deg, rgba(183, 110, 195, 0) 177.49deg, rgba(76, 57, 146, 0.86) 319.52deg, rgba(82, 38, 136, 0) 467.08deg)',
          filter: 'blur(17px)',
          borderRadius: '300px',
          transform: 'rotate(1.91deg)',
          marginBottom: '15rem',
          marginLeft: '-15rem',
          marginRight: '10rem'
        },
        '.custom-blur-background': {
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, rgba(49, 58, 91, 0) -1.11%, rgba(49, 58, 91, 0.44) 23.83%, #313A5B 99.56%)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
        },
        '.separator-background': {
          position: 'absolute',
          background: 'linear-gradient(180deg, rgba(67, 24, 137, 0.10) 0%, rgba(217, 217, 217, 0) 70.65%)',
          borderRadius: '30px',
        },
        '.custom-line': {
          position: 'absolute',
          width: '280px',
          height: '1px',
          left: '50%',
          top: '210px',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(90deg, rgba(249, 248, 247, 0) 0%, #FBFAFA 9.09%, rgba(249, 248, 247, 0) 100%)',
          backgroundBlendMode: 'overlay',
          borderRadius: '10px 10px 0px 0px',
        },
        '.separator-outline': {
          position: 'absolute',
          height: '1px',
          background: 'linear-gradient(90deg, rgba(249, 248, 247, 0) 0%, rgba(215, 136, 198, 0.5) 50.32%, rgba(249, 248, 247, 0) 100%)',
          borderRadius: '10px 10px 0px 0px',
        },
        '.custom-button': {
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '13px 12px',
          gap: '10px',
          width: '216px',
          height: '46px',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 48.05%, rgba(0, 0, 0, 0.2) 48.9%), linear-gradient(180deg, rgba(49, 58, 91, 0) -19.57%, #313A5B 98.8%, rgba(49, 58, 91, 0.222222) 130.43%)',
          filter: 'drop-shadow(0px 14px 20px rgba(42, 51, 83, 0.8))',
          borderRadius: '10px',
          flex: 'none',
          order: '0',
          flexGrow: '0',
        },
        '.card-container': {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap', // Allow cards to wrap to the next line
          justifyContent: 'center', // Center cards horizontally
          gap: '20px', // Adjust the gap between cards
        },
        '.card': {
          backgroundColor: '#10183F',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          width: 'var(--card-width)', // Use the defined width utility
          padding: 'var(--card-padding)', // Use the defined padding utility
          margin: 'var(--card-margin)', // Use the defined margin utility
          
        },
        '.question': {
          fontWeight: 'bold',
          marginBottom: '10px',
          color: '#fff',
        },
        '.answer': {
          color: '#fff',
        },
        
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

