module.exports = {
  plugins: {
    tailwindcss: {
      mode: 'jit',
      purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    },
    autoprefixer: {
      grid: true,
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateRows: 'repeat(12, 1fr)',
      gridAutoColumns: '1fr',
      gridAutoRows: '1fr',
      gridGap: '1rem',
      gridColumnGap: '1rem',
      gridRowGap: '1rem',
      gridColumnStart: 1,
      gridColumnEnd: 13,
      gridRowStart: 1,
      gridRowEnd: 13,
      gridColumn: '1 / 13',
      gridRow: '1 / 13',
      gridArea: '1 / 1 / 13 / 13',
      gridAutoFlow: 'row',
      gridTemplateAreas: 'none',
    },
  },
};
