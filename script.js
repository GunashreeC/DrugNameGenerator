document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('nameForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        const usernameDisplay = document.getElementById('usernameDisplay');
        const newFirstNameDisplay = document.getElementById('newFirstName');
        const newLastNameDisplay = document.getElementById('newLastName');

        usernameDisplay.textContent = username;
        newFirstNameDisplay.textContent = generateRandomName(firstName);
        newLastNameDisplay.textContent = generateRandomName(lastName);

        // Optional: You can send the generated names to a server for further processing or storage.

        // Redirect to the result page
        window.location.href = 'result.html';
    });

    function generateRandomName(baseName) {
        // Replace this with your logic to generate names using cancer drug names
        const drugNames = ['Drug1', 'Drug2', 'Drug3'];
        const randomDrug = drugNames[Math.floor(Math.random() * drugNames.length)];

        return baseName + '-' + randomDrug;
    }
});
