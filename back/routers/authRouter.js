const router = require('express').Router()
const controller = require('../controller/authController')
// const {body, validationResult} = require('express-validator')
const userController = require('../controller/userController')



router.post('/register', controller.register)
router.post('/login', controller.login)
// router.get('/users', controller.getUsers)
router.get('/users',userController.getUsers)



module.exports = router

