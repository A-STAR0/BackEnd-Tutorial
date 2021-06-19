const express = require('express');
const path = require('path'); //for getting the proper path of any file or folder without putting it into the string on your own.
const app = express();
const port = 80;

//for serving static files
app.use('/static', express.static('static'));
//here in app.use('/static', express.static('static')) first part is the url or endpoint router to get access to static files and second part is the name of the folder in which static files are stored , you can name it as static or any xyz;

//set the template engine as pug
app.set('view engine', 'pug');

//set the views or template directory
app.set('views', path.join(__dirname, 'template'));
//*****VIEWS is compulsory************template is the name of directory in which pug file is stored generally its's name is either view or views or template**************

//our pug demo endpoint
app.get('/demo', (req, res) => {
  console.log(req.url);
  res.status(200).render('./demo', {
    title: 'Hey Aman',
    message:
      'Hello there! and thanks for starting COMIENCE and teaching us pug as an template engine. A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms or render the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.',
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
