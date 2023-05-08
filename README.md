# Series Finder

Esta prueba técnica consiste en desarrollar una aplicación de búsqueda de series en línea. La aplicación está creada con React y TypeScript, utilizando Vite como herramienta de construcción del proyecto. Los estilos de la aplicación están escritos en Sass, y la gestión del estado se realiza con Redux Toolkit.

La aplicación consta de dos páginas principales: la página de inicio (HomePage) y la página de detalle (DetailsPage). En la página de inicio, se muestran una lista de series disponibles, mientras que en la página de detalle se muestra información más detallada sobre una serie específica. La información de las series se obtiene a través de la API de The Movie Database.

¡Explora y disfruta de la búsqueda de tus series favoritas con Series Finder!

## Requisitos previos

- Node.js: asegúrate de tener Node.js instalado en tu sistema.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto: `cd series-finder`.
3. Ejecuta el siguiente comando para instalar las dependencias:

npm install

## Ejecución

1. Para ejecutar la aplicación en un entorno de desarrollo, utiliza el siguiente comando:

npm run dev

Esto iniciará Vite y abrirá la aplicación en el navegador.

2. Para compilar la aplicación para producción, utiliza el siguiente comando:

npm run build

Esto generará una carpeta `dist` con los archivos optimizados listos para ser desplegados en un servidor.

## Estructura del proyecto

Explica la estructura de archivos y carpetas relevantes dentro del proyecto, destacando los puntos clave.

- `src/components`: Contiene los componentes reutilizables de la aplicación.
- `src/components/Spinner`: Componente Spinner que muestra una animación de carga.
- `src/components/Header`: Componente Header que muestra la cabecera de la aplicación.
- `src/components/Footer`: Componente Footer que muestra el pie de página de la aplicación.
- `src/components/Show`: Componente Show que muestra información detallada sobre una serie.
- `src/components/Shows`: Componente Shows que muestra la lista de series.
- `src/pages/HomePage`: Contiene la página principal donde se listan las series.
- `src/pages/DetailsPage`: Contiene la página de detalle de una serie específica.
- `src/sass`: Carpeta que contiene los estilos de la aplicación escritos en Sass.
- `src/sass/base`: Carpeta que contiene estilos base, como reset.css.
- `src/sass/mixins`: Carpeta que contiene mixins Sass reutilizables.
