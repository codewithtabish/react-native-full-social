/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          // Background
          background: '#272727',
          surface: '#2C2C2C',
          // Text
          textPrimary: '#FFFFFF',
          textSecondary: '#AFAFAF',
          // Accents
          primary: '#3478F6',
          secondary: '#FFBA08',
          success: '#5CB85C',
          error: '#D9534F',
          // Add more dark mode colors as needed
        },
        light: {
          // Background
          background: '#FFFFFF',
          surface: '#F7F7F7',
          // Text
          textPrimary: '#333333',
          textSecondary: '#666666',
          // Accents
          primary: '#3478F6',
          secondary: '#FFBA08',
          success: '#5CB85C',
          error: '#D9534F',
          // Add more light mode colors as needed
        },
      },
    },
  },
  plugins: [],
};
