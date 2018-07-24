'use strict'

const register = (...middlewares) => (app) => {
    middlewares.forEach(middleware => 
        app.use(middleware)
    )
}

module.exports = {
    register,
}