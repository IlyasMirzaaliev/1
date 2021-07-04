const mysql = require('../mysql/mysql') 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
 
 class AuthController {
     async register(req, res) {
         console.log(req.body);
    const {fullName, login, password, passwordConfirm } = req.body
       mysql.query("SELECT login FROM auth_users WHERE login = ?", [login], (error, results) => {
           if(error) {
               console.log(error);
           }
           if(results.length > 0) {
               return res.send({
                    message: "Login in use"
                })
           }else if (password !== passwordConfirm) {
                return res.send({
                    message: "Password don't match"
                })
           }else if(!fullName) {
               return res.send({
                   message: "name cannot be empty"
               })
           }
       })

      let hashPasswd = await bcrypt.hash(password, 6) 
      mysql.query('INSERT INTO auth_users SET ?', {login: login, fullName: fullName, password: hashPasswd}, (error, results) => {
            if(error) {
                console.log(error)
            }else {
                res.send({
                    message: "User registered"
                })
            }
       })

     }

     async login() {

     }
 
 }


 module.exports = new AuthController()