// tailwind.config.js

const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class', // Enable dark mode manually via 'class'
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // All source files
    './public/index.html',        // Optional: for head-level classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',     // 🔥 Urban Custom Orange
        secondary: '#1E1E1E',   // ⚫ Matte Black (Thar style)
        accent: '#FFD700',      // ✨ Golden highlights
      },
      fontFamily: {
        urban: ['Poppins', 'sans-serif'], // Sleek modern font
      },
      spacing: {
        header: '4.5rem', // Custom navbar height
      },
      transitionDuration: {
        DEFAULT: '300ms', // Smoother transitions
      },
      zIndex: {
        hero: '1000', // Keep Hero section on top
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),       // Better <form> elements
    require('@tailwindcss/typography'),  // For rich text/blog content
    plugin(function ({ addVariant }) {
      addVariant('child', '& > *');             // For targeting direct children
      addVariant('child-hover', '& > *:hover'); // Hover effect on children
    }),
  ],
};
