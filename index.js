const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/sum', (req, res) => {
    console.log(req.query.x + "+" + req.query.y);
    if(req.query.x && req.query.y){
        res.send((Number(req.query.x) + Number(req.query.y)).toString())
    }else{
        res.send('missing arguments')
    }
})


app.listen(8000, () => {
    console.log(`App ready`)
})