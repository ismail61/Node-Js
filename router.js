//start
const route = require('express').Router()


const {
    login,
    logout,
    signin
} = require('./getmethod')

route.get('/login', login)
route.get('/signin', signin)
route.get('/logout', logout)


//end

module.exports.routerr = route