/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      'mine-shaft': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#2d2d2d',
    },
    'bright-sun': {
        '50': '#fefce8',
        '100': '#fff9c2',
        '200': '#fff087',
        '300': '#ffe043',
        '400': '#ffd129',
        '500': '#efb303',
        '600': '#ce8900',
        '700': '#a46104',
        '800': '#884b0b',
        '900': '#733e10',
        '950': '#431f05',
    },
  }
    },
  },
  plugins: [],
}