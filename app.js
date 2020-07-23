const express = require('express');

const path = require('path');

const bodyparser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.set('views', 'views');

const mainroutes = require('./routes/main');
app.use(mainroutes);

app.listen(3000);