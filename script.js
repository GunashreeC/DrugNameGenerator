function generateNames() {
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
  
    const generatedFirstName = generateCancerDrugName();
    const generatedLastName = generateCancerDrugName();
  
    // Save data to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('generatedFirstName', generatedFirstName);
    localStorage.setItem('generatedLastName', generatedLastName);
  
    // Redirect to second.html
    window.location.href = 'second.html';
  }
  
  function generateCancerDrugName() {
    // Implement your logic for generating cancer drug names here
    // For simplicity, you can use a static list or any logic you prefer
    const drugNames = ['Drug1', 'Drug2', 'Drug3'];
    const randomIndex = Math.floor(Math.random() * drugNames.length);
    return drugNames[randomIndex];
  }
  
  // Code for second.html
  if (window.location.href.includes('second.html')) {
    const greetingElement = document.getElementById('greeting');
    const generatedNamesElement = document.getElementById('generatedNames');
  
    const username = localStorage.getItem('username');
    const generatedFirstName = localStorage.getItem('generatedFirstName');
    const generatedLastName = localStorage.getItem('generatedLastName');
  
    greetingElement.textContent = `Hi, ${username}!`;
    generatedNamesElement.textContent = `Your new names: ${generatedFirstName} ${generatedLastName}`;
  }
  