# Deportes Acosta - E-commerce

Una aplicación de comercio electrónico desarrollada con React y Firebase, especializada en productos deportivos y suplementos.

## Características principales

- Catálogo de productos con filtrado por categorías
- Carrito de compras funcional
- Proceso de checkout completo
- Base de datos en tiempo real con Firestore
- Interfaz responsive y moderna
- Navegación SPA (Single Page Application)

## Tecnologías utilizadas

- **React 18** - Biblioteca principal para la UI
- **React Router DOM** - Navegación entre componentes
- **Firebase/Firestore** - Base de datos en la nube
- **CSS3** - Estilos personalizados con soporte para modo claro/oscuro
- **Context API** - Manejo del estado global del carrito

## Funcionalidades

### Navegación
- **Inicio:** Vista principal con todos los productos
- **Categorías:** Filtrado por Gym, Suplementos, Boxeo
- **Detalle de producto:** Información completa y selector de cantidad
- **Carrito:** Gestión de productos agregados
- **Checkout:** Formulario de compra y confirmación

### Gestión del carrito
- Agregar/quitar productos
- Modificar cantidades
- Calcular totales automáticamente
- Persistencia durante la sesión
- Validación de stock

### Base de datos
- Productos almacenados en Firestore
- Órdenes de compra registradas
- Consultas en tiempo real

## Instalación y uso

1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd deportes-acosta-ecommerce
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar Firebase (opcional - ya configurado)
```bash
# Si necesitas cambiar la configuración:
# Editar src/firebase/firebase.js con tus credenciales
```

4. Ejecutar la aplicación
```bash
npm run dev
```

5. Poblar la base de datos (primera vez)
```javascript
// Opcional: usar sampleData.js para agregar productos de prueba
import { uploadSampleData } from './src/data/sampleData.js'
// Ejecutar uploadSampleData(db) desde la consola del navegador
```

## Componentes principales

### Contenedores
- `ItemListContainer` - Lista de productos con filtros
- `ItemDetailContainer` - Detalle individual de producto
- `Cart` - Carrito de compras
- `Checkout` - Proceso de finalización de compra

### Presentación
- `ItemList` - Grid de productos
- `Item` - Tarjeta individual de producto
- `ItemDetail` - Vista detallada con selector
- `ItemCount` - Control de cantidad
- `CartItem` - Item dentro del carrito
- `CheckoutForm` - Formulario de datos del comprador

### Navegación y UI
- `NavBar` - Barra de navegación principal
- `CartWidget` - Icono del carrito con contador

## Características técnicas

- **Responsive Design:** Adaptado para desktop, tablet y móvil
- **Loading States:** Indicadores de carga para mejor UX
- **Error Handling:** Manejo de errores de red y datos
- **Validaciones:** Formularios con validación en tiempo real
- **Accesibilidad:** Elementos semánticos y navegación por teclado

## Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Vista previa del build

## Categorías de productos

- **Gym:** Equipamiento para gimnasio y fitness
- **Suplementos:** Proteínas, vitaminas y suplementos deportivos
- **Boxeo:** Guantes, protecciones y accesorios de boxeo

## Estado del proyecto

El proyecto está completo y listo para producción. Incluye todas las funcionalidades básicas de un e-commerce y está optimizado para una buena experiencia de usuario.

## Autor

Desarrollado como proyecto final del curso de React - CoderHouse

---

Nota: Este es un proyecto educativo. Para uso en producción, considera implementar autenticación de usuarios, pasarela de pagos real y optimizaciones adicionales de seguridad.
