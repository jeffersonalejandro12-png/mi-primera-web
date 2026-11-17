# Portafolio Técnico & Bitácora de Construcción

**Operador:** Jefferson Alejandro  
**Base:** Itagüí, Antioquia  
**Enfoque:** Arquitectura de Sistemas & Ejecución Lean

Este repositorio aloja el código fuente de mi web personal. Más allá de ser una carta de presentación, es el registro material de mi proceso retomando la programación desde cero para construir mis propias herramientas sin depender de terceros.

---

## Bitácora de Construcción

### 01. HTML: El Esqueleto y la Jerarquía
* **Fricción:** Al principio veía el código como un bloque de texto plano. Caí en el error clásico de meter todo en etiquetas `<div>` genéricas sin orden, lo que hacía que la estructura colapsara en pantallas móviles. Además, la foto de perfil no tenía restricciones de tamaño y desproporcionaba todo el encabezado.
* **Resolución:** Reemplacé los bloques genéricos por etiquetas semánticas (`<main>`, `<header>`, `<section>`, `<table>`) para darle jerarquía real a la información. Fijé dimensiones rígidas al contenedor de la imagen (`shrink-0`) para blindar la proporción del encabezado sin importar el tamaño de la pantalla.

### 02. CSS vs. Tailwind: Eliminar el Ruido
* **Fricción:** Arrancó con un archivo `styles.css` pesado, lleno de variables `:root`, selectores repetitivos y *media queries* manuales para cada tarjeta. Cambiar un simple margen o un color implicaba saltar constantemente entre archivos, generando una fricción innecesaria y un código difícil de mantener.
* **Resolución:** Apliqué rigor minimalista. Dejé `styles.css` reducido a lo estrictamente indispensable (importación de tipografías y ajuste de la barra de desplazamiento) y migré el 95% del diseño a **Tailwind CSS** mediante su CDN. Inyecté mi paleta exacta (`#0d0d0f`, `#ff5e00`, `#00e5ff`) directamente en la configuración del `<head>`. Trabajar con clases utilitarias directamente en el HTML eliminó la duplicidad de código y aceleró los ajustes responsivos (`md:flex-row`, `md:grid-cols-2`).

### 03. JavaScript: La Terminal y la Lógica de Interacción
* **Fricción:** Quería que la página respondiera como un sistema vivo, no como un folleto estático. Al programar la terminal CLI y los filtros, me encontré con dos problemas: al acumularse las respuestas en la consola, el contenedor no bajaba automáticamente, y los botones de filtro perdían su estado activo al hacer clic.
* **Resolución:** Implementé escuchadores de eventos limpios (`keydown` y `submit`) manipulando el DOM directamente. Ajusté el desplazamiento automático (`scrollTop = scrollHeight`) para que la lectura en la terminal siempre muestre la última salida, y conecté una simulación de transmisión para el formulario de despacho con estados visuales claros.

### 04. Git & GitHub: Control de Versiones
* **Fricción:** Confusiones iniciales con el flujo de ramas y el clásico error de rutas relativas donde los archivos estáticos o las imágenes dejaban de cargar al subirlos al repositorio por apuntar a directorios locales incorrectos.
* **Resolución:** Establecí una disciplina de *commits* atómicos y descriptivos para auditar cada avance real (migración a Tailwind, actualización de proyectos en la tabla del ecosistema, integración del formulario). Mantuve la raíz del proyecto limpia para asegurar un despliegue directo y sin errores de ruta.

---

## Estructura del Proyecto

```text
/
├── index.html                 # Estructura principal, configuración Tailwind y componentes
├── styles.css                 # Reglas globales mínimas (tipografías y scrollbar)
├── script.js                  # Lógica de la terminal CLI, filtros y formulario
├── foto_perfil_Alejandro.JPG  # Activo visual principal
└── README.md                  # Este documento
