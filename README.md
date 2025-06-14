# Estudio Contable - Aplicación Web

Una aplicación web moderna para un estudio contable, desarrollada con React y TypeScript.

## Características

- Diseño moderno y responsivo
- Animaciones de scroll suaves
- 5 rutas estáticas
- Header y Footer personalizables
- Sistema de temas centralizado
- Optimizada para rendimiento

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd estudio-contable
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Estructura del Proyecto

```
src/
  ├── assets/        # Imágenes y recursos estáticos
  ├── components/    # Componentes reutilizables
  ├── config/        # Configuración (temas, etc.)
  ├── layouts/       # Layouts de la aplicación
  ├── pages/         # Páginas/componentes de ruta
  └── styles/        # Estilos globales
```

## Personalización

### Colores y Temas

Los colores y temas se pueden personalizar en `src/config/theme.ts`. Este archivo centraliza toda la configuración de estilos de la aplicación.

### Imágenes

Las imágenes se pueden agregar en el directorio `src/assets/` y se pueden importar directamente en los componentes.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la versión de producción

## Tecnologías Utilizadas

- React
- TypeScript
- Vite
- React Router
- Styled Components
- Framer Motion

## Licencia

MIT
