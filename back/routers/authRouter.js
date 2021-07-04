const router = require('express').Router()
const controller = require('../controller/authController')
// const {body, validationResult} = require('express-validator')



router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)



module.exports = router