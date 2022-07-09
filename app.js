const { json } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT = 5800;

app.listen( PORT,()=> { 
    console.log(`Listening to port ` + PORT);
});

app.get('/', (req, res) => { 
    return res.json('hello');
})