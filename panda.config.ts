import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#ec4a0a' },
          lighten: { value: '#f6a88a' },
          white: { value: '#ffffff' },
          gray: {
            100: { value: '#f0f2f7' },
            200: { value: '#d0d5dd' },
            300: { value: '#667085' },
            400: { value: '#344054' },
            500: { value: '#000000' },
          },
        },
      },
    },
  },
  globalCss: {
    'ul, li': {
      listStyle: 'none',
    },
    body: {
      fontFamily: 'Paperozi, sans-serif',
    },
  },
  globalFontface: {
    Paperozi: [
      {
        src: 'url("https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2") format("woff2")',
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: 'url("https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2") format("woff2")',
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
    ],
  },
  outdir: 'styled-system',
});
