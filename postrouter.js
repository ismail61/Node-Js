const routee = require('express').Router()


routee.get('/', (req, res) => {
    let { cat, page, fil } = req.query
    console.log(req.query)
    res.send('Page')
})

//poId dynamic
routee.get('/:poId', (req, res) => {
    //console.log(req.params)
    res.send('I am lisen' + req.params.poId)
})
routee.get('/:poId/reviews/:revId', (req, res) => {
    //console.log(req.params)
    res.send('I am lisen => ' + req.params.poId + " " + req.params.revId)
})

module.exports = routee