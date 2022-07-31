const mongoose = require('mongoose'); 

mongoose.connect('mongodb://127.0.0.1:27017/mementoTattoo', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => { 
        console.log("Database is connected")
    })
    .catch((error) => { 
        console.log(error)
    })

module.exports = mongoose;