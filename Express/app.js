const express = require('express');
const path = require('path');
const app = express();
const port = 80;

//for serving static files
app.use('/static', express.static('static'));

//set the template engine as pug
app.set('view engine', 'pug');

//set the views or template directory
app.set('views', path.join(__dirname, 'views'));

//our pug demo endpoint
app.get('/demo', (req, res) => {
  res.status(200).render('demo', {
    title: 'Hey Aman',
    message: 'Hello there! and thanks for starting COMIENCE and teaching us pug',
  });
});

app.get('/', (req, res) => {
  console.log(req.url);
  res.send('This is homepage of my First express app');
});
app.get('/about', (req, res) => {
  console.log(req.url);
  res.end('This is about page of my first express app');
});
app.post('/about', (req, res) => {
  console.log(req.url);
  res.send('This is post request about page of my first express app');
});
app.get('/this', (req, res) => {
  console.log(req.url);
  res.status(404).send('404 page not found');
  //to send both status and response data at a same time
});
app.listen(port, () => {
  console.log(`App started sucessfully on port ${port}`);
});
