const express = require('express');
const morgan = require('morgan');
var handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes/index.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // submit form html
app.use(express.json()); // send from javascript code
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', handlebars({ extname: '.hbs' })); // rename tail of .handlebars => .hbs
app.set('view engine', '.hbs');
    app.set('views', path.join(__dirname, 'resources/views'));

// Route init
    route(app);

          app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
