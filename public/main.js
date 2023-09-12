// script.js

document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('jobForm');
    const jobList = document.getElementById('jobList');

    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const jobTitle = document.getElementById('jobTitle').value;
        const jobDescription = document.getElementById('jobDescription').value;

        // Create a job listing
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');

        const titleElement = document.createElement('h2');
        titleElement.classList.add('job-title');
        titleElement.textContent = jobTitle;

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('job-description');
        descriptionElement.textContent = jobDescription;

        jobItem.appendChild(titleElement);
        jobItem.appendChild(descriptionElement);

        jobList.appendChild(jobItem);

        // Clear the form
        jobForm.reset();
    });
});
