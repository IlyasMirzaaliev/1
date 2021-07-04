const router = require('express').Router()
const controller = require('../controller/authController')



router.post('/register', controller.register)



module.exports = router