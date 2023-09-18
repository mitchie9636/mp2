 // Function to fetch job listings from the server
 async function fetchJobs() {
    try {
        // Send a GET request to the '/fetchJobs' route on the server
        const response = await fetch('/fetchJobs');
        const data = await response.json();

        // Get the job listings array from the response
        const jobListings = data.jobs; // Adjust this based on the actual structure of the response

        // Select the jobList element where job listings will be displayed
        const jobListElement = document.getElementById('jobList');

        // Clear any existing job listings
        jobListElement.innerHTML = '';

        // Loop through the job listings and create list items
        jobListings.forEach((job) => {
            const listItem = document.createElement('li');
            listItem.textContent = job.title; // Replace with the actual job data you want to display
            jobListElement.appendChild(listItem);
        });
    } catch (error) {
        console.error(error);
        alert('An error occurred while fetching jobs.');
    }
}

// Call the fetchJobs function when the page loads
window.onload = fetchJobs;