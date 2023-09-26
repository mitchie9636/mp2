const express = require('express');  
require('dotenv').config();         
const ejs = require('ejs');         
const path = require('path');         
const router = require('./router');
const bodyParser = require('body-parser'); 
const app = express();                            
app.use(express.static('public'));
const session = require('express-session');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

                                        //---------directories-------referring-public & views folder------------------
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public')));

//--------end-directories--------------------------

 // a route to server page --------------------------------

app.get('/', (req, res)=>{
    res.render('home');
});


app.use(session({
    secret: 'Tos12345', // tos secret key
    resave: false,
    saveUninitialized: true,

  }));


//set the routes -----------------------------------   
app.use('/', router)


                                                                     
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://${process.env.HOSTNAME}:${process.env.PORT}.`);
});