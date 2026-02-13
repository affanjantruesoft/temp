const path = require('path');
const tokensPreset = require(path.resolve(__dirname, '../../packages/tokens/tailwind.preset.cjs'));

module.exports = {
  presets: [tokensPreset],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
