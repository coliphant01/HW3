const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const mainRoutes = require('./routes/mainRoute');
const http = require("http");

const homeController = require('./controllers/homeController');
app.get('/', homeController.getHome);

// Using Routes
app.use(mainRoutes);

// Setting up server
const port = 3000;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);

module.exports = app;
