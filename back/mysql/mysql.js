const mysql = require('mysql2').createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWD,
        database: process.env.DB_BASE,
    })
    
    mysql.connect((err) => {
        if(err) {
            console.log(err)
        }else {
            console.log('connected to DB')
        }
    })


module.exports = mysql