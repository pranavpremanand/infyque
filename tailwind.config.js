/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblack: "#020816",
        darkbackground: "#1d1d1f",
        // primary: "#CCAF53",
        primary: "#0088CC",
      },
      backgroundImage: {
        footerBackground: "radial-gradient(circle, rgba(0,100,158,1) 0%, rgba(2,8,22,1) 58%);",
        footerBackgroundLight: "radial-gradient(circle, rgba(230,244,255,1) 0%, rgba(179,217,255,1) 40%, rgba(0,136,204,0.7) 100%);",
        background: "radial-gradient(circle, rgba(0,100,158,1) 0%, rgba(2,8,22,1) 80%);",
        backgroundLight: "radial-gradient(circle, rgba(240,248,255,1) 0%, rgba(204,229,255,1) 60%, rgba(0,136,204,0.5) 100%);",
        lightGradient: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(230,244,255,1) 50%, rgba(179,217,255,1) 100%);",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            a: {
              color: '#0088CC',
              '&:hover': {
                color: '#006699',
              },
            },
            h1: {
              fontWeight: '700',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h2: {
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h3: {
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            blockquote: {
              borderLeftColor: '#0088CC',
              fontStyle: 'italic',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.25rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
          },
        },
        dark: {
          css: {
            color: '#e2e8f0',
            a: {
              color: '#0088CC',
              '&:hover': {
                color: '#38bdf8',
              },
            },
            h1: {
              color: '#f1f5f9',
            },
            h2: {
              color: '#f1f5f9',
            },
            h3: {
              color: '#f1f5f9',
            },
            blockquote: {
              borderLeftColor: '#0088CC',
              color: '#e2e8f0',
            },
            code: {
              backgroundColor: '#1e293b',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
