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

     async login(req, res) {
            try {
                const {login, password} = req.body
                console.log(req.body)
                if(!login || !password)  {
                    return res.status(400).send({
                        message: "login or password cannot be empty"
                    })
                }
            mysql.query('SELECT * FROM auth_users WHERE login = ?', [login], async (error, results) => {
                    if (!results || !(await bcrypt.compare(password, results[0].password))) {
                        return res.status(401).send({
                            message: "Login or Password incorrect"
                        });
                    }else {
                        const id = results[0].id
                        const token = jwt.sign({ id: id}, process.env.JWT_SECRET, {
                            expiresIn: process.env.JWT_EXPIRES_IN
                        })

                        const cookieOptions = {
                            expires: new Date(
                                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60
                            ),
                            httpOnly: true
                        }

                        res.cookie('myJWT', token, cookieOptions);
                        res.status(200).send({
                            token: `${token}`,
                            id: `${id}`,
                            cookie: `${cookieOptions.expires}`
                        })
  
                    }
                })    

            } catch (error) {
                console.log(error)
            }
     }

     async getUsers(req, res) {
         try {
             res.send({
                 message: 'users list'
             })
         } catch (error) {
             console.log(error)
         }
     }
 
 }


 module.exports = new AuthController()