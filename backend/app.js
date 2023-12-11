const express = require('express');
const bcrypt = require('bcrypt');
const app = express(); 
const mongoose = require('./database/mongoose');
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');
require("dotenv").config();

const Tattoos = require('./database/models/tattoos');
const User = require('./database/models/users');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../frontend/src/assets/img/tattoos'));
  },
  filename: function (req, file, cb) {
    const uniqueFileName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueFileName);
  }
});

const upload = multer({ storage: storage });

// enable CORS Cross Origin Request Security
app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH , DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/tattoos", upload.single('image'), (req, res) => {
  const { name, description } = req.body;
  const imagePath = req.file.originalname;
  const fullImagePath = `assets/img/tattoos/${req.file.filename}`;

  new Tattoos({ 
    name: name,
    description: description,
    img: fullImagePath
  }).save()
  .then(data => res.json(data))
  .catch(error => res.json(error))
});

app.patch('/tattoos/:tattoosId', upload.single('image'), (req, res) => {
  const { name, description } = req.body;
  const existingImagePath = req.body.img; // Conserve l'image existante si elle est définie
  const fullImagePath = req.file ? `assets/img/tattoos/${req.file.filename}` : existingImagePath;
  const updateFields = {
    img: fullImagePath,
    name: name,
    description: description
  };

  Tattoos.findOneAndUpdate({ _id: req.params.tattoosId }, { $set: updateFields }, { new: true })
    .then(data => res.json(data))
    .catch(error => res.json(error));
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