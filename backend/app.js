const express = require('express');
const app = express(); 
const mongoose = require('./database/mongoose');

const List = require('./database/models/list');
const Tattoos = require('./database/models/tattoos');

// enable CORS Cross Origin Request Security
app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH , DEL");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


// localhost:3000 - backend api 

//frontend - localhost:4200


app.use(express.json());

app.listen(3000, () => { 
    console.log("Server running on port 3000");
})

app.get('/tattoos', (req, res, next) => { 
    Tattoos.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

app.post("/", (req, res) => { 
    new Tattoos({ 
        'name': req.body.name,
        'description': req.body.description
    }).save()
    .then(data => res.json(data))
    .catch(error => res.json(error))
});