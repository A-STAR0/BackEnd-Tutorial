// organized express backend flow
const express = require('express');
const { format } = require('path');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 80;

//Express Specific stuff
app.use('/static', express.static('static')); //for serving static files
app.use(express.urlencoded()); //middleware which helps form's data to shift from front end to backend

//pug specific stuff
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views', path.join(__dirname, 'template')); //set the views or template directory

//ENDPOINTS
app.get('/', (req, res) => {
  const con = 'I love backend development, it is just amazing';
  const params = { title: 'pug is just awesome', content: con };

  res.status(200).render('./index.pug', params);
});
app.post('/', (req, res) => {
  console.log(req.body);
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;
  const output_to_write = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her : ${more}`;
  fs.writeFileSync('output.txt', output_to_write);
  const params = { message: 'your form has been submitted sucessfully' };
  res.status(200).render('index.pug', params);
});
//START THE SERVER
app.listen(port, () => {
  console.log(`App started sucessfully on port ${port}`);
});
