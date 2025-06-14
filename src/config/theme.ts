export const theme = {
  colors: {
    primary: '#2C3E50',
    secondary: '#3498DB',
    accent: '#E74C3C',
    background: '#FFFFFF',
    text: '#2C3E50',
    lightGray: '#ECF0F1',
    darkGray: '#7F8C8D',
  },
  fonts: {
    main: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
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