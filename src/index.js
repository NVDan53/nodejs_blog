const express = require('express');
const morgan = require('morgan');
var handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const port = 3000;
const route = require('./routes/index.js');
const db = require('./config/db');
// connect to DB
db.connect();

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // submit form html
app.use(express.json()); // send from javascript code
// HTTP logger
app.use(morgan('combined'));

// Template engines
app.engine('.hbs', handlebars({ extname: '.hbs', helpers: {
    sum: (a, b) => a+b,
} })); // rename tail of .handlebars => .hbs
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Route init
route(app);
    
app.listen(port, () => {console.log(`App listening at http://localhost:${port}`);
});
