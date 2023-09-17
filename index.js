const express = require('express');
require('dotenv').config();
const ejs = require('ejs');
const path = require('path');
const router = require('./router');
// const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set('/static', express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public')));



const jobs = [];

app.get('/', (req, res) => {
    res.render('main', {title:'Main Page' });  //path for html file
});

app.get('login', (req, res) => {
    res.render('login', {title:'Login Page' });  //path for html file
});


app.get('/signup', (req, res) => {
    res.render('signup'); // Render the 'signup.ejs' view
  });

// Post AREA-----------------------------------------------------------------------------------------------


app.post('/login', (req, res)=>{
    
    res.render('login',{title:'Login Page'});
});




  app.post('/', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    res.redirect('/thank-you');
  });

app.get('/', (req, res)=>{
    res.render('main');
});


//set the routes    
app.use('/', router)
app.use('/signup', router)

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://${process.env.HOSTNAME}:${process.env.PORT}.`);
});
