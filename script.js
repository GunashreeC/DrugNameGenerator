// script.js

function savetoexcel() {
    var email = document.getElementById('email').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var cancerType = document.getElementById('cancerType').value;
  
    // Check if all required fields are filled
    if (!email || !firstName || !lastName || !cancerType) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Make a POST request to the Google Apps Script web app
    fetch('https://script.google.com/macros/s/AKfycbwLgk3v860mLSXcdUrKE7863SBsp04kqmQuG4LkixlRRSXYfNiII5fZlIxKofyon9ma/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, firstName: firstName, lastName: lastName, cancerType: cancerType }),
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        // Optionally, you can redirect or perform other actions after successful save
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  }
  

function generateNames() {
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const cancerType = document.getElementById('cancerType').value;
  
    const generatedFirstName = generateCancerDrugName();
    const generatedLastName = generateCancerDrugName();
  
    // Store data in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('cancerType', cancerType);
    localStorage.setItem('generatedFirstName', generatedFirstName);
    localStorage.setItem('generatedLastName', generatedLastName);
  
    // Send data to Google Sheets using Google Apps Script
    //sendDataToGoogleSheets(email, firstName, lastName, cancerType);
    // Redirect to second.html
    window.location.href = 'second.html';
    
}
    // used- exec - https://script.google.com/macros/s/AKfycbwCRMZXJjVBtssJw2VCVO4SYWKWzlXEO7kFVDONnQRwlkAuxEKWcsbxoqfapJFjDv7n/exec'

  function generateCancerDrugName() {
    // Implement your logic for generating cancer drug names here
    // For simplicity, you can use a static list or any logic you prefer
    const drugNames = ['ABVD',
    'AC','ATO','ATRA','Abemaciclib (Verzenois)','Abiraterone (Zytiga)','Abraxane','Abstral','Acalabrutinib','Actimorph','Actinomycin D','Actiq','Adriamycin','Afatinib','Afinitor',
    'Aldara','Alectinib','Alectinib','Alemtuzumab','Alkeran','Anastrazole (Arimidex)','Apalutamide','Ara C','Arimidex','Aromasin',
    'Tretinoin','Asparaginase','Avelumab','Axitinib','Azacitidine',

    'BEACOPP','BEAM','Bendamustine','Besponsa','Bevacizumab','Bexarotene','Bicalutamide','Bleomycin','Bleomycin','Blinatumomab', 'Bortezomib',
    'Bortezomib','Bortezomib','Bortezomib','Bosulif','Bosutinib','Brentuximab','Brigatinib','Buserelin','Busulfan', 'Cabazitaxel',

    'Cabometyx','Cabozantinib','Caelyx','Calpol','Campto','Capecitabine','Caprelsa','CarboTaxol','Carboplatin','Carfilzomib','Carmustine','Casodex','Cemiplimab',
    'Ceritinib','Cetuximab','Chlorambucil','Cisplatin','Cladribine','Clasteon','Co-codamol','Cometriq','Cosmegen','Crisantaspase','Crizotinib','Cyclophosphamide',
    'Cyprostat','Cyproterone acetate','Cytarabine','Cytosine arabinoside'];
    const randomIndex = Math.floor(Math.random() * drugNames.length);
    return drugNames[randomIndex];
  }
  

function printContent() {
    const container = document.querySelector('.container');
    const printWindow = window.open('', '_blank');
    
    if (printWindow) {
      const contentToPrint = container.innerHTML;
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
            <style>
              body {
                font-family: 'Arial', sans-serif;
              }
              .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: none;
              }
            </style>
          </head>
          <body onload="window.print(); window.onafterprint = function () { window.close(); }">
            ${contentToPrint}
          </body>
        </html>
      `);
      printWindow.document.close();
    } else {
      alert('Please allow pop-ups to print.');
    }
  }
  
  if (window.location.href.includes('second.html')) {
    const greetingElement = document.getElementById('greeting');
    const generatedNamesElement = document.getElementById('generatedNames');
    const printButton = document.getElementById('printButton');
  
    const username = localStorage.getItem('username');
    const generatedFirstName = localStorage.getItem('generatedFirstName');
    const generatedLastName = localStorage.getItem('generatedLastName');
  
    greetingElement.textContent = `Hi, ${username}!`;
    generatedNamesElement.textContent = `Your Cancer Drug Name is: ${generatedFirstName} ${generatedLastName}`;
  
    printButton.addEventListener('click', function() {
      window.print();
    });
}