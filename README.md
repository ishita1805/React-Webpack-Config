## Setting up react from scratch


### Understanding dependancies
**1. Babel (.babelrc)**
Babel helps us convert ES5+ JS/JSX code into browser compatible code. we use `.babelrc` to configure babel
- @babel/core (Needed for managing all babel dependancies)
- @babel/preset-env (Provides support for ES5, ES6)
- @babel/preset-react (Provide compatibility to react's env)

**2. Webpack (webpack.config.js)**
Webpack is a static module bundler for modern JavaScript applications.It transforms complex dependancy structures into simple static assets. we create a `webpack.config.js` file to configure webpack.
- webpack (core library)
- webpack-cli (to manage and use certain webpack commands via cli)
- webpack-dev-server (A minimal server which helps with client-side development)

**3. Loaders**
- babel-loader (Used to load babel config into webpack)
- css-loader (Used to load CSS config into webpack)
- style-loader (Used to load style config into webpack)

**4. React**

**5. React Dom**

### Folder structure

    /src
    - This directory will hold all the react code

    /public
    - This directory will hold the html file, and other config like favicon, manifest, etc.
    - Bundle.js is also stored here after running the build command

    /node_modules
    - holds all dependancies for the project


### Setup

- clone the repository `git clone ...`
- use command `npm install` to install all dependancies
- use command `npm start` to start the development server

### Compatibility

This app is compatible with:
- JS/JSX extenstions
- CSS

**configure the webpack.config.js to add typescript, sass, postcss support**