
# 🚀 Frontend de Gestión de Productos - Prueba Técnica

## 📋 Descripción

Aplicación frontend desarrollada en Angular para consumir y gestionar productos mediante una API REST, que incluye:

* Visualización y gestión de productos (CRUD)
* Uso de Angular Signals para manejo reactivo del estado.
* Comunicación entre componentes con `@Input()` y `@Output()`
* Consumo de API con `HttpClient`.
* Interfaz amigable y responsiva con Tailwind CSS 

## 🔧 Tecnologías Principales

* **Angular 19** (o la versión que uses)
* **TypeScript**
* **RxJS** para programación reactiva
* **HttpClient** para comunicación HTTP
* **Angular Signals** para estado reactivo
* **Tailwind CSS** (opcional, si usas otro estilo cambiar)
* **Angular CLI** para desarrollo y despliegue

## ⚙️ Configuración

### Requisitos previos

* Node.js 18+
* Angular CLI 
* Git

### Instalación

1. Clonar repositorio:

```bash
git clone https://github.com/JevDev2304/frontendCIC.git
```

2. Instalar dependencias:

```bash
cd frontendCIC
npm install
```

### Variables de entorno

Configura la URL base de la API en el archivo `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000'  // URL de tu backend
};
```

## 🏃 Ejecución

Iniciar servidor de desarrollo:

```bash
ng serve -o
```

Abrir en el navegador: [http://localhost:4200](http://localhost:4200)

## 📚 Funcionalidades

### Gestión de Productos

* Listado de productos
* Creación, actualización y eliminación de productos
* Sincronización con API externa mediante backend
* Comunicación entre componentes usando `@Input()` y `@Output()`
* Estado reactivo con Angular Signals para actualizar UI automáticamente
* Peticiones HTTP gestionadas con `HttpClient` y observables RxJS para manejo eficiente de datos

## 📌 Mejoras Futuras

1. **Mejorar UX/UI**

   * Implementar paginación y filtros avanzados
   * Añadir animaciones y transiciones


3. **Autenticación y autorización**

   * Implementar login con JWT y protección de rutas

4. **Optimización y despliegue**

   * Ajustar build para producción y deploy automático

