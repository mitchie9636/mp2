// //import needed packages
const express = require('express');
const {check, validationResult} = require('express-validator');

//create a server
const router = express.Router();


// //route to the login page
router.get('/main', (req, res)=>{
    res.render('main',{title:'main Page'});
});

router.get('/login', (req, res)=>{
    res.render('login',{title:'Login Page'});
});

// const credential = {
//     email: 'TOS@test.com',
//     password: 'tRio1234'
// };

router.get('/signup', (req, res)=>{
    res.render('signup',{title:'Signup Page'});
});

// // //route to authenticate a user
// // router.post('/login', [
// //     check('email')
// //     .notEmpty()
// //     .withMessage('email is required.'),

// //     check('password')
// //     .notEmpty()
// //     .withMessage('password is required.')
// //     .isLength({min:8})
// //     .withMessage('password must be at least 8 characters.')
// // ],(req, res)=>{

// //     const errors = validationResult(req);

// //     if(!errors.isEmpty()){
// //         console.log(errors);
// //         // res.send({ errors: errors.array() });
// //         res.render('login',{title:'Login Page', errors: 'Please check your input' });
// //     }else{
// //         if(req.body.email == credential.email && req.body.password == credential.password){
// //             //create a session
// //             req.session.user = req.body.email;
// //             res.redirect('/dashboard');
// //         }else{
// //             res.render('login',{title:'Login Page', isInvalid: 'Your credential does not exist' });
// //         }
// //     }

// //     // if(!req.body.email || !req.body.password){
// //     //     res.send('email or password is required');
// //     // }else{
       
      
// //     // }
// // });

// // //route to the dashboard
// // router.get('/dashboard',(req, res)=>{
// //     if(req.session.user){
// //         res.render('dashboard',{title:'Dashboard', user: req.session.user });
// //     }else{
// //         res.send(403);
// //     }
// // });

// // //route to destroy the session
// // router.get('/logout', (req, res)=>{
// //     req.session.destroy(function(err){
// //         if(err){
// //             console.log(err);
// //             res.send(err);
// //         }else{
// //             res.render('login', {title:'Login Page', logout:'Logout successfully!'});
// //         }
// //     })
// // });


module.exports = router;