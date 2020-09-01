export const typography = {
  primary: `Quicksand, sans-serif`,
  sizes: {
    body: '14px',
    heading: {
      h1: '36px',
      h2: '28px',
      h3: '24px',
      h4: '20px',
      h5: '18px',
      h6: '16px',
    },
  },
  weights: {
    regular: 400,
    bold: 700,
  },
};

export const colors = {
  brand: '#13C1AC',
  white: '#FFFFFF',
  black: '#000000',
  danger: '#CC4B37',
} as const;

export const dom = {
  body: {
    maxWidth: '980px',
  },
  header: {
    height: '115px',
  },
};
