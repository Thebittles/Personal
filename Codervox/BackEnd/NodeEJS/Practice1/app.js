const express = require('express');
const app = express();
const PORT = 3000

app.set('view engine', 'ejs') // dont have to specify ejs in main.ejs

// Route Handlers

app.get('/', (req, res)=>{
    res.render("main", {pastry: "donuts"});
});

app.get('/about/:stuff', (req, res)=>{
    var stuff = req.params.stuff;
    res.render('about', {stuff: stuff});
})



//Listeners
app.listen(3000, ()=>{
    console.log(`App is running on port ${PORT}`);
});