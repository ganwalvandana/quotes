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

app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));


app.use(mainroutes);

app.use(errorController.get404);

mongoose
.connect(
    'mongodb+srv://Vandanganwal:vandana@cluster0.oohyc.mongodb.net/<dbname>? retryWrites=true&w=majority'
)
// .then(result => {
//     app.listen(3000);
// });
app.listen(3000);


