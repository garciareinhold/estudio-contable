export const theme = {
  colors: {
    primary: '#004DF3', // azul
    secondary: '#004DF3', // usar el mismo azul para secondary
    accent: '#000115', // negro para acento
    background: '#FFFFFF',
    text: '#000115', // negro para texto
    lightGray: '#ECF0F1', // gris claro original
    darkGray: '#888888', // gris oscuro neutro
  },
  fonts: {
    main: "'Sora', sans-serif",
    heading: "'Sora', sans-serif",
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  transitions: {
    default: '0.3s ease-in-out',
  },
} as const;

export type Theme = typeof theme; 