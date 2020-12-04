//Foundation
const express = require('express');
const app = express();
const PORT = 3000


// Route Handlers
app.get('/', (req, res)=>{
    res.send('hello world');
});


app.get('/about', (req, res)=>{
    res.send(`You've reached the About Page!`)
})

// Listeners

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})