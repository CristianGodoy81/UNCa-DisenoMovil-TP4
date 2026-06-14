export const Theme = {
  colors: {
    primary: '#64B5F6',       // Azul más claro/brillante para que resalte en fondo oscuro
    secondary: '#81C784',     // Verde claro para acentos positivos o éxitos
    background: '#121212',    // Fondo principal de la app (Gris oscuro estándar de Modo Oscuro)
    surface: '#1E1E1E',       // Fondo de tarjetas, contenedores o inputs (un poco más claro que el fondo)
    text: '#FFFFFF',          // Texto principal (Blanco puro)
    textMuted: '#A0A0A0',     // Texto secundario o deshabilitado (Gris claro)
    border: '#2C2C2C',        // Líneas divisorias o bordes de inputs
    error: '#CF6679',         // Color de error optimizado para modo oscuro (no encandila)
  },
  
  fonts: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },

  size: {
    title: 24,
    subtitle: 18,
    body: 14,
    caption: 12,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  
  roundness: {
    small: 4,
    medium: 8,
    large: 12,
  }
};