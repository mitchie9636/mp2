// Import needed packages
const express = require('express');
const { check, validationResult } = require('express-validator');

// Create a server
const router = express.Router();

//  login route
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login Page' });
});

const credential = {
  email: 'Tos@test.com',
  password: 'Tos12345',
};

router.post('/login', [
  check('email')
    .notEmpty()
    .withMessage('Email is required.'),

  check('password')
    .notEmpty()
    .withMessage('Password is required.')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters.'),
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    res.render('login', { title: 'Login Page', errors: errors.array() });
  } else {
    if (req.body.email === credential.email && req.body.password === credential.password) {
      // Set up a session
      req.session.user = req.body.email;
      res.redirect('/dashboard');
    } else {
      res.render('login', { title: 'Login Page', isInvalid: 'Your credentials do not exist' });
    }
  }
});

// Define your dashboard route
router.get('/dashboard', (req, res) => {
  if (req.session && req.session.user) {
    res.render('dashboard', { title: 'Dashboard', user: req.session.user });
  } else {
    res.sendStatus(403);
  }
});

// Define your logout route
router.post('/logout', (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.render('login', { title: 'Login Page', logout: 'Logout successfully!' });
    }
  });
});

module.exports = router;
