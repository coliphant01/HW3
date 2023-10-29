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

// Using Routes
app.use(mainRoutes);

app.use((req, res, next) => {
    res.status(404).render('notFound');
});

// Setting up server
const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Listening on http://localhost:${port}`);

module.exports = app;

