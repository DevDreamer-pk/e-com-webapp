/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT( {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    screens: {
      '2xs': "320px",
      'xs': "480px",
      'sm': '640px',      // Small screens, like smartphones (min-width: 640px)
      'md': '768px',      // Medium screens, like tablets (min-width: 768px)
      'lg': '1024px',     // Large screens, like laptops (min-width: 1024px)
      'xl': '1280px', 
      "2xl": "1440px",
      "3xl": "1920px"    // Extra large screens, like desktops (min-width: 1280px)
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],    // Default sans-serif font stack
      'serif': ['Georgia', 'Times', 'serif'],          // Default serif font stack
      'mono': ['Menlo', 'Monaco', 'monospace'],       // Default monospace font stack
    },
    colors: {
      'primary': '#4CAF50',    // Custom primary color
      'secondary': '#FFC107',   // Custom secondary color
      'accent': '#2196F3',
      'light-gray': '#F5F5F5',
      'light-gray-2': '#7D8184', 
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#9E9E9E',
      'red': '#f44336',
      'red-100': '#EF9A9A',

      'red-200': '#E57373',
      'red-300': '#EF5350',
      'red-400': '#E53935',
      'red-500': '#F44336',
      'red-600': '#D32F2F',
      'red-700': '#C62828',
      'red-800': '#B71C1C',
      'red-900': '#880E4F',
      'red-950': '#4A148C',
      'green': '#4CAF50',
      'green-100': '#C8E6C9',
      'green-200': '#A5D6A7',
      'green-300': '#81C784',
      'green-400': '#66BB6A',
      'green-500': '#4CAF50',
      'green-600': '#43A047',
      'green-700': '#388E3C',
      'green-800': '#2E7D32',
      'green-900': '#1B5E20',
      'green-950': '#0B341A',
      'blue': '#2196F3',
      'blue-100': '#E3F2FD',
      'blue-200': '#BBDEFB',
      'blue-300': '#90CAF9',
      'blue-400': '#64B5F6',
      'blue-500': '#42A5F5',
      'blue-600': '#2196F3',
      'blue-700': '#1E88E5',
      'blue-800': '#1976D2',
      'blue-900': '#1565C0',
      'blue-950': '#0D47A1',
      'yellow': '#FFC107',
      'gray-800': '#1F2937',
      'gray-700': '#374151',
      'gray-400': '#9CA3AF',
      'gray-900': '#111827',
      'gray-300': '#D1D5DB',
      'gray-200': '#E5E7EB',
      'gray-100': '#F3F4F6',
      'gray-50': '#F9FAFB',
      'gray-600': '#4B5563',
      'gray-500': '#6B7280'

    },
    fontSize: {
      'xs': '.75rem',   // Extra small font size
      'sm': '.875rem',  // Small font size
      'base': '1rem',   // Base font size (16px)
      'lg': '1.125rem', // Large font size
      'xl': '1.25rem',  // Extra large font size
      '2xl': '1.5rem',  // Double extra large font size
      '3xl': '2rem',    // Triple extra large font size
      '4xl': '3rem',    // Quadruple extra large font size
      '5xl': '4rem',    // Quintuple extra large font size
    },
    extend: {},
  },
  plugins: [],
});

