const express =  require('express')
const app = express()
const path = require('path')
const cookeParser = require('cookie-parser')
require('dotenv').config({path: './.env'})


// app.use(express.static(path.join(__dirname, './public')))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookeParser())

app.use('/auth', require('./routers/authRouter'))
app.use('/', require('./routers/pages'))


const startServer = async () => {
    try {
        await require('./mysql/mysql')
        app.listen( process.env.PORT,() => {
            console.log(`working on port ${process.env.PORT}`, );
        })
    } catch (error) {
        console.log(error)
    }
} 


startServer()