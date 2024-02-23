document.addEventListener('DOMContentLoaded', function () {
    const nameForm = document.getElementById('nameForm');
    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        // Cancer drug names (you can add more)
        const cancerDrugNames = ["Afinitor", "Avastin", "Cyramza", "Ibrance", "Opdivo", "Tarceva"];

        // Generate a random cancer drug name
        const randomCancerName = cancerDrugNames[Math.floor(Math.random() * cancerDrugNames.length)];

        // Display results on the result page
        document.getElementById('usernameResult').innerText = username;
        document.getElementById('cancerNameResult').innerText = `${firstName} ${lastName} ${randomCancerName}`;
        
        // Redirect to the result page
        window.location.href = "result.html";
    });
});
