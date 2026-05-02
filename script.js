const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log("Middleware used.");
    next();
})

app.get('/', function(req, res) {
    res.send("This is home pageeeee")
})

app.get('/about', function(req, res){
    res.send("This is about pageeeeee")
})

app.listen(3000)