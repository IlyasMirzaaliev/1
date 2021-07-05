const mysql = require('../mysql/mysql')


class UserController {
    async getUsers(req, res) {
        try {
            mysql.query("SELECT * FROM users1 ", (errors, results) => {
                if(errors) {
                    console.log(errors)
                }else {
                    res.send(results)
                }
            })
        } catch (error) {
            
        }
    }
}

module.exports = new UserController()






