const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/users/:username', function(req, res){
    const username = req.params.username;
    res.send(`Welcome ${username} to this website`)
})

app.get('/author/:authorID/:age', function(req, res){
    const authorID = req.params.authorID;
    const age = req.params.age;
    res.send(`Welcome ${authorID}. Your age is ${age}`);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});