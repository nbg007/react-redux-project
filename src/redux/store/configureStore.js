<<<<<<< HEAD
/**
 * Based on the current environment variable, we need to make sure
 * to exclude any DevTools-related code from the production builds.
 * The code is envify'd - using 'DefinePlugin' in Webpack.
 */

=======
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
let loadedStore = null

if (process.env.NODE_ENV === 'production') {
  loadedStore = require('./configureStore.prod')
} else {
  loadedStore = require('./configureStore.dev')
}

export const configureStore = loadedStore
