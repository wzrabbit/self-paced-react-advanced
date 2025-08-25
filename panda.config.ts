import { defineConfig } from '@pandacss/dev';
import colorPreset from './src/presets/colorPreset';

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'styled-system',
  presets: [colorPreset],
});
