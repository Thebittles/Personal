const express = require('express');
const app = express();
const PORT = 3000

app.set('view engine', 'ejs') // dont have to specify ejs in main.ejs

app.use(express.static('public')) // allows us to view css. //make public folder in projects //css file goes inside public 


// Route Handlers

app.get('/', (req, res)=>{
    res.render("main", {pastry: "donuts"});
});


/* conditional statments  */
app.get('/about/:stuff', (req, res)=>{
    var stuff = req.params.stuff;
    res.render('about', {stuff: stuff});
});




/* loopin over data */
app.get('/jobs', (req, res)=>{
    var data = [ //dummy data to loop over mess with
        {name: "Angela", occupation: "software engineer", company: "Facebook"},
        {name: "Paul", occupation: "webdeveloper", company: "Twitter"},
        {name: "Matt", occupation: "instructor", company: "School"},
        {name: "Louise", occupation: "sales representative", company: "Dell"}
    ];
    res.render('jobs', {data: data})
});


//Listeners
app.listen(3000, ()=>{
    console.log(`App is running on port ${PORT}`);
});


var data = [
    {name: "Angela", occupation: "software engineer", company: "Facebook"},
    {name: "Paul", occupation: "webdeveloper", company: "Twitter"},
    {name: "Matt", occupation: "instructor", company: "School"},
    {name: "Louise", occupation: "sales representative", company: "Dell"}
];
