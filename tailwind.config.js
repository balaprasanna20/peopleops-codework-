/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Clean Editorial Cream & Beige System (Color Hunt Palette: #FFF8CF, #FBE6C2)
        cream: {
          50: '#FFFDF9',
          100: '#FAF7EE', // Core background
          150: '#FFF8CF', // Butter / Soft cream accent
          200: '#FBE6C2', // Warm sand beige
          250: '#F5DAC0',
          300: '#EBD0AF', // Warm border
          400: '#D7CBBA',
          500: '#C2B19C',
        },
        // Rich Forest Green System (Color Hunt Palette: #2A7C13)
        forest: {
          50: '#f1f9ef',
          100: '#def2db',
          200: '#bfe6ba',
          300: '#94d48d',
          400: '#76C457', // Accent Leaf Green
          500: '#4da62e',
          600: '#398720',
          700: '#2d6d19',
          800: '#265717',
          900: '#2A7C13', // Primary Brand Green
          950: '#113309', // Deep Forest Charcoal
        },
        // Fresh Botanical Sage & Emerald Accents (Color Hunt: #76C457)
        sage: {
          50: '#F5FAF3',
          100: '#EAF5E7', // Pill background
          200: '#D2EBCB', // Pill border
          300: '#AEE0A4',
          400: '#76C457', // Primary Accent Green
          500: '#5BA83E',
          600: '#2A7C13', // Dark text green
          700: '#20630D',
        },
        // Soft Butter Highlights (Color Hunt: #FFF8CF)
        butter: {
          50: '#FFFFF2',
          100: '#FFFCE6',
          200: '#FFF8CF',
          300: '#FFF2AC',
          400: '#FFE670',
        },
        // Warm Sand Beige (Color Hunt: #FBE6C2)
        sand: {
          50: '#FEF9F3',
          100: '#FDF1E2',
          200: '#FBE6C2',
          300: '#F6D29D',
          400: '#EFB972',
        },
        // Slate & Charcoal Text for High Legibility
        charcoal: {
          900: '#111813',
          800: '#1A261E',
          700: '#26372B', // Primary body text
          600: '#3E5044',
          500: '#5C7063', // Muted text
          400: '#84968B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(15, 51, 37, 0.05)',
        card: '0 10px 30px -4px rgba(15, 51, 37, 0.07)',
        cardHover: '0 20px 40px -8px rgba(15, 51, 37, 0.12)',
        forest: '0 10px 25px -5px rgba(15, 51, 37, 0.25)',
      }
    },
  },
  plugins: [],
}
