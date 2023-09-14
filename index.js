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
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public')));


// const jobs = [];

// app.get('/', (req, res) => {
//     res.render('main', { jobs });  //path for html file
// });

// app.get('/', (req, res)=>{
//     res.render('main');
// });

app.get('main', (req, res) => {
    const navlinks = [
      { text: 'Main', url: path.join(mainPath) },
      { text: 'Find Jobs', url: path.join(findJobsPath) },
      { text: 'Company Reviews', url: path.join(companyReviewsPath) },
      { text: 'Find Salaries', url: path.join(findSalariesPath) },
      { text: 'Log In', url: path.join(logInPath) },
      { text: 'Employers', url: path.join(employersPath) },
    ];
  
    res.render('main', { navlinks });
  });
  




// app.post('/post-job', (req, res) => {
//     const { jobTitle, jobDescription } = req.body;
//     jobs.push({ title: jobTitle, description: jobDescription });
//     res.redirect('/');
// });

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://${process.env.HOSTNAME}:${process.env.PORT}.`);
});
