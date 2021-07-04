const router = require('express').Router()
const controller = require('../controller/authController')


router.get('/', (req, res) => {
    res.send({
        message: "Main Page"
    })
})

router.get('/register', (req, res) => {
    res.send({
        message: "Register Page"
    })
})

router.get('/login', (req, res) => {
    res.send({
        message: "Login Page"
    })
})


module.exports =router