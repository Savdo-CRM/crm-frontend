/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      textColor: 'rgba(58, 53, 65, 0.38)',
      sidebarColor: 'rgba(58, 53, 65, 0.87)',
      textWhite: '#fff',
    },
    backgroundColor: {
      sidebar: '#F4F5FA',
      sidebarWhite: '#fff',
      div: '#9155FD',
    },
    extend: {},
  },
  plugins: [],
}

