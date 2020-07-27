const express = require('express');


const path = require('path');
const errorController = require('./controllers/error');

const mongoose = require('mongoose');

const bodyparser = require('body-parser');
// const mongoConnect = require('./util/main').mongoConnect;
const app = express();


app.set('view engine','ejs');
app.set('views', 'views');

const mainroutes = require('./routes/main');

app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainroutes);

app.use(errorController.get404);

const port = 4000;
mongoose
.connect(
    'mongodb+srv://vandanganwal:vandana@cluster0.90kka.mongodb.net/quotes?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(result => {
    app.listen(port, () => console.log('server listening @' + port));
});

// app.listen(3000);


