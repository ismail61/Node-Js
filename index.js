// const chalk = require('chalk');
// console.log(chalk.red.black('I am A Student'));
// console.log(chalk.red('Hello', chalk.underline.blue('world') + '!'));

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Userrouter = require('./router')
const postrrouter = require('./postrouter')
const { restart } = require('nodemon')
const app = express()
    /*
    //app.use(morgan('dev'))//globally use middleware


    //custome middleware

    function customMiddleWare(req, res, next) {
        //console.log('I am Logged ' + req.url)
        //next()
        if (req.url == '/ismail') {
            res.send('<h1>Sorry.This page is blocked by admin </h1>')
        }
        next()
    }

    function tinyLogger() {
        return (req, res, next) => {
            console.log(req.method + ' - ' + req.url)
            next()
        }
    }
    const middleware = [customMiddleWare, tinyLogger()]

    //app.use(customMiddleWare)
    app.use(middleware)

    //specify middleware morgan('dev')
    app.get('/ismail', morgan('dev'), (req, res) => {
        res.send('<h1>I am also a student of SWE</h1>')
    })

    */

//user Router created by me 

app.use('/user', Userrouter.routerr)
app.use('/post', postrrouter)

//user Router ended by me 


//set EJS
app.set('view engine', 'ejs')


app.get('/ismail', (req, res) => {
    res.send('<h1>I am also a student of SWE</h1>')
})


app.get('/help', (req, res) => {
    res.render('help', { title: 'Help Page' })
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' })
})
app.get('/html', (req, res) => {
    res.render('hi', {
        title: 'EJS is awesome',
        p: 'Ejs is a template engine',
        condition: true
    })
})


app.get('/json', (req, res) => {
    res.json({
        message: 'I am a student'
    })
})

app.get('/', (req, res) => {
    res.send('<h1>I am a student</h1>')
})

//MongoDb and mongoose

const Schema = mongoose.Schema

const schema_ = new Schema({
    name: String
})

const Test = mongoose.model('Test', schema_)
app.get('/db', (req, res) => {
    const test = new Test({
        name: 'Ismail Hosen'
    })
    test.save().then(t => {
        res.json(t)
    }).catch(e => {
        console.log(e)
        res.status(500).json({
            error: 'Error Occures'
        })
    })
})
app.get('*', (req, res) => {
    res.send('404 Not Found!')
})




const port = process.env.PORT || 7070

mongoose.connect('mongodb+srv://root:password61@database.dcg2q.mongodb.net/root?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(port, () => {
        console.log("server is running on port " + port)
    })
})

//var server = app.listen(port, () => {
//var host = server.address().address
//var port = server.address().port

//console.log("Example app listening at http://%s:%s", host, port)
//console.log("server is running on port " + port)
//})