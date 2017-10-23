const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('upperCase', (text) => {
  return text.toUpperCase();
});

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//middleware to log requests to the server
app.use((req, res, next) => {
  var time = new Date().toString();
  var log = `${time} : ${req.method} ${req.url}`;

  fs.appendFile('server.log', log + '\n');
  console.log(log);

  next();

});

// //middleware for maintenance mode, comment & uncomment to bring app up or down
// app.use((req, res, next) => {
//   res.render('maintenance.hbs', {
//     pageTitle: 'Maintenance'
//   });
// });

//serve static pages intended for public access
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my web server using Express & Handlebars.'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorCode: 404,
    errorMessage: 'Content not found!'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
