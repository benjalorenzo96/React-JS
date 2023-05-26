# Proyecto de React

Este es un proyecto de React que consiste en una aplicación de compras en línea. Permite a los usuarios ver y comprar productos, agregar elementos al carrito de compras, y finalizar la compra. También cuenta con una funcionalidad de creación de tareas para los usuarios registrados.

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías y bibliotecas:

- React: biblioteca de JavaScript para construir interfaces de usuario.
- React Router: biblioteca para el enrutamiento dentro de la aplicación.
- Firebase: plataforma en la nube utilizada para la autenticación y el almacenamiento de datos.
- Bootstrap: framework CSS para el diseño y la estructura de la interfaz de usuario.

## Dependencias adicionales

Se utilizan las siguientes dependencias adicionales a las trabajadas en clase:

- react-router-dom: para el enrutamiento en la aplicación.
- firebase: para la integración con Firebase, incluyendo la autenticación y el almacenamiento de datos.
- bootstrap: para los estilos y la estructura de la interfaz de usuario.

## Configuración de Firebase

Antes de ejecutar la aplicación, es necesario configurar Firebase. Se deben reemplazar los valores de configuración de Firebase en los archivos `App.js`, `index.js`, `Checkout.js` y `CreateTask.js` con las credenciales y la configuración de tu propio proyecto de Firebase.

## Estructura de archivos

La estructura de archivos del proyecto es la siguiente:

- `App.js`: componente principal que define las rutas y las páginas principales de la aplicación.
- `index.js`: punto de entrada de la aplicación que renderiza el componente principal.
- `components/ItemListContainer.js`: componente que muestra la lista de productos.
- `components/ItemDetailContainer.js`: componente que muestra los detalles de un producto.
- `components/NavBar.js`: componente de la barra de navegación.
- `components/CartContext.js`: contexto y proveedor para el carrito de compras.
- `components/CreateTask.js`: componente para crear una tarea.
- `components/Checkout.js`: componente para finalizar la compra.
- `index.css`: archivo CSS para los estilos globales de la aplicación.

## Contribuciones

Este proyecto es parte de un curso de programación y no se aceptan contribuciones externas en este momento.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
