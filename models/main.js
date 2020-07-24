const fs = require('fs');

const path = require('path');

const mongodb = require('mongodb');

class Post {
    constructor(title, description, writer) {
        this.title = title;
        this.description = description;
        this.writer = writer;
    }
}