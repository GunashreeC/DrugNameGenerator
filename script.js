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
    const drugNames = ['ABVD',
    'AC',
    'ATO',
    'ATRA',
    'Abemaciclib (Verzenois)',
    'Abiraterone (Zytiga)',
    'Abraxane',
    'Abstral',
    'Acalabrutinib',
    'Actimorph',
    'Actinomycin D',
    'Actiq',
    'Adriamycin',
    'Afatinib',
    'Afinitor',
    'Aldara',
    'Alectinib',
    'Alectinib',
    'Alemtuzumab',
    'Alkeran',
    'Anastrazole (Arimidex)',
    'Apalutamide',
    'Ara C',
    'Arimidex',
    'Aromasin',
    'Arsenic trioxide', 'Tretinoin',
    'Asparaginase',
    'Avelumab',
    'Axitinib',
    'Azacitidine','BEACOPP',
    'BEAM',
    'Bendamustine',
    'Besponsa',
    'Bevacizumab',
    'Bexarotene',
    'Bicalutamide',
    'Bleomycin',
    'Bleomycin, etoposide and platinum',
    'Blinatumomab',
    'Bortezomib',
    'Bortezomib thalidomide and dexamethasone',
    'Bortezomib, cyclophosphamide and dexamethasone',
    'Bortezomib, melphalan and prednisalone',
    'Bosulif',
    'Bosutinib',
    'Brentuximab',
    'Brigatinib',
    'Buserelin',
    'Busulfan', 'Drug3'];
    const randomIndex = Math.floor(Math.random() * drugNames.length);
    return drugNames[randomIndex];
  }
  
  // Code for second.html
 /* if (window.location.href.includes('second.html')) {
    const greetingElement = document.getElementById('greeting');
    const generatedNamesElement = document.getElementById('generatedNames');
  
    const username = localStorage.getItem('username');
    const generatedFirstName = localStorage.getItem('generatedFirstName');
    const generatedLastName = localStorage.getItem('generatedLastName');
  
    greetingElement.textContent = `Hi, ${username}!`;
    generatedNamesElement.textContent = `Your cancer drug name is: ${generatedFirstName} ${generatedLastName}`;
  }*/
  
// Code for second.html
 if (window.location.href.includes('second.html')) {
    const greetingElement = document.getElementById('greeting');
    const generatedNamesElement = document.getElementById('generatedNames');
    const printButton = document.getElementById('printButton');
  
    const username = localStorage.getItem('username');
    const generatedFirstName = localStorage.getItem('generatedFirstName');
    const generatedLastName = localStorage.getItem('generatedLastName');
  
    greetingElement.textContent = `Hi, ${username}!`;
    generatedNamesElement.textContent = `Your new names: ${generatedFirstName} ${generatedLastName}`;
  
    printButton.addEventListener('click', function() {
      window.print();
    });
  }
  // ... (previous code)

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
  

  
  