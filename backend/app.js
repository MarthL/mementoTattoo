const express = require('express');
const app = express(); 
const mongoose = require('./database/mongoose');

const Tattoos = require('./database/models/tattoos');
const User = require('./database/models/users');

// enable CORS Cross Origin Request Security
app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH , DELETE");
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

app.get("/tattoos/:tattoosId", (req, res) => { 
    Tattoos.find({ _id: req.params.tattoosId})
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

app.post("/tattoos", (req, res) => { 
    new Tattoos({ 
        'name': req.body.name,
        'description': req.body.description
    }).save()
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

app.patch('/tattoos/:tattoosId', (req, res) => { 
    Tattoos.findOneAndUpdate({_id: req.params.listId}, {$set: req.body})
        .then(data => res.json(data))
        .catch(error => res.json(error))
});

app.delete('/tattoos/:tattoosId', (req, res) => { 
    Tattoos.deleteOne({"_id": req.params.tattoosId})
        .then(data => res.json(data))
        .catch(error => res.json(error))
});

app.post('/login', (req, res) => { 
    // silence is golden
})