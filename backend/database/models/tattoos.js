const mongoose = require('mongoose');

const TattoosSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
    },
    description: { 
        type: String,
    }
});

const Tattoos = mongoose.model('tatoos', TattoosSchema, "tatoos"); 

module.exports = Tattoos;