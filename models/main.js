const fs = require('fs');

const path = require('path');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const postSchema =  new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    writer: {
        type: String,
        required: true
    }

    
});

module.exports = mongoose.model('main', postSchema);