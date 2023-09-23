// Import needed packages
const express = require('express');
const axios = require('axios');
const app = express();
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

// Post logout route
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



router.get('/findjobs', async (req, res) => {
  const job_id = req.query.job_id;

  if (!job_id) {
    return res.status(400).json({ error: 'findjobs' });
  }

  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/job-details',
    params: {
      job_id,
      extended_publisher_details: 'false',
    },
    headers: {
      'X-RapidAPI-Key': 'a290b14e4cmsh10439da46f740b6p185846jsn55c4c05f58d1',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const jobDetails = response.data;
    res.json(jobDetails);
  } catch (error) {
    console.error('Error fetching job details:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});






module.exports = router;
