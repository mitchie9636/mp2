// Import needed packages
const express = require('express');
const axios = require('axios');
const { check, validationResult } = require('express-validator');

// Create a server
const router = express.Router();

 //  route to live server page --------------------------------

//route to the home
router.get('/home', (req, res)=>{
    if(req.session.user){
        res.render('home', {title: 'home', user: req.session.user});
    }else{
        res.sendStatus(403);
    }
});



// end of routes


//  login route
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login Page' });
});

//route to authenticate the user
router.post('/login',

[
    check('email')
    .notEmpty()
    .withMessage('email is required.'),

    check('password')
    .notEmpty()
    .withMessage('password is required.')
    .isLength({min:8})
    .withMessage('password must be at least 8 characters.')
]

,(req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log(errors);
        // res.send({ errors: errors.array() });
        res.render('login', {title:'Login Page', errors:'Please check your input!'});
    }else{
        if(isCredentialCorrect(email, password)){
            // create a session
            req.session.user = req.body.email;
            res.redirect('/home');
        }else{
            res.render('login', {title:'Login Page', isInvalid:'Your credential does not exist!'});
        }
    }
});

function isCredentialCorrect(email, password){
    //fake database
       const credential = {
       email:'Tos@test.com',
       password: 'Tos12345'
       }

       if(email == credential.email && password == credential.password){
           return true;
       }else{
           return false;
       }
   };



//route to destroy the session
router.post('/logout', (req, res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.render('login', {title:'Login Page', logout:'Logout successfully!'});
        }
    });
});






module.exports = router;