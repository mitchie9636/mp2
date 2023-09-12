const express = require('express');
require('dotenv').config();
const ejs = require('ejs');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public')));


// const jobs = [];

// app.get('/', (req, res) => {
//     res.render('dash', { jobs });  //path for html file
// });

app.get('/', (req, res)=>{
    res.render('main');
});


// app.post('/post-job', (req, res) => {
//     const { jobTitle, jobDescription } = req.body;
//     jobs.push({ title: jobTitle, description: jobDescription });
//     res.redirect('/');
// });

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://${process.env.HOSTNAME}:${process.env.PORT}.`);
});
