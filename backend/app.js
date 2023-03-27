const express = require('express');
const bcrypt = require('bcrypt');
const app = express(); 
const mongoose = require('./database/mongoose');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
require("dotenv").config();
const multer = require('multer');

const Tattoos = require('./database/models/tattoos');
const User = require('./database/models/users');


// enable CORS Cross Origin Request Security
app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH , DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({storage: storage});

// localhost:3000 - backend api 

//frontend - localhost:4200

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.post("/tattoos", upload.single('img'), (req, res) => {
  console.log(req.body)
  new Tattoos({ 
    'name': req.body.name,
    'description': req.body.description,
    'img': req.file.path,
  }).save()
  .then(data => res.json({
    'name': data.name,
    'description': data.description,
    'img': data.img,
  }))
  .catch(error => res.json(error))
});

app.patch('/tattoos/:tattoosId', (req, res) => { 
    Tattoos.findOneAndUpdate({_id: req.params.tattoosId}, {$set: req.body}) 
        .then(data => res.json(data))
        .catch(error => res.json(error))
});

app.delete('/tattoos/:tattoosId', (req, res) => { 
    Tattoos.deleteOne({"_id": req.params.tattoosId})
        .then(data => res.json(data))
        .catch(error => res.json(error))
});

app.post("/login", async (req, res) => {
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email, password })
      if (user) {
        (async () => { 
            await bcrypt.compare(password, user.password)
        })
      }
        // Create token
        const token = jwt.sign(
          { email: JSON.stringify(email) },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.json(user.token)
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });

module.exports = app;