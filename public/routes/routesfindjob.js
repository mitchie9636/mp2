// Import required modules
const express = require('express'); // Import Express.js
const axios = require('axios'); // Import Axios for making HTTP requests

// Create an Express application
const app = express();

// Set the port for your server
const port = 5000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to fetch jobs from an API
app.get('/fetchJobs', async (req, res) => {
    // Configuration options for the Axios request
    const options = {
        method: 'GET',
        url: 'https://indeed-indeed.p.rapidapi.com/apisearch', // API endpoint URL
        params: {
            publisher: 'T.O.S.',
            v: '2',
            format: 'json',
            callback: 'main',
            q: 'java', // Query parameters for the job search
            l: 'Metro Manila,Pampanga,Batangas,Cavite,Laguna,Cebu,Davao',
            sort: 'Relevance',
            radius: '25',
            st: 'jobsite',
            jt: 'fulltime,partime,contract,temporary',
            start: '0',
            limit: '5',
            fromage: '5',
            highlight: '1',
            filter: '1',
            latlong: '1',
            co: 'Philippines',
            chnl: '1',
            userip: '127.0.0.1',
            useragent: 'Chrome/109.0.5414.120'
        },
        headers: {
            'X-RapidAPI-Key': 'ffd2551d7bmsh3f75f4f948ef375p1acec7jsn21ab57886b98',
            'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
        }
    };

    try {
        // an asynchronous HTTP GET request to the specified API
        const response = await axios.request(options);
        
        // Send the API response data as JSON to the client
        res.json(response.data);
    } catch (error) {
        // Handle errors and send a 500 Internal Server Error response
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching jobs' });
    }
});

// Start the Express server and listen on the specified port
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://${process.env.HOSTNAME}:${process.env.PORT}.`);
});

