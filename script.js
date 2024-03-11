function generateNames() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  //const cancertype = document.getElementById('cancerType').value;
  const email = document.getElementById('email').value;

  const generatedFirstName = generateCancerDrugName();
  const generatedLastName = generateCancerDrugName();

  // Save data to localStorage
  localStorage.setItem('username', firstName);
  localStorage.setItem('generatedFirstName', generatedFirstName);
  localStorage.setItem('generatedLastName', generatedLastName);

  // Redirect to second.html
  window.location.href = 'second.html';
}

    
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

  function emailResult() {
    const container = document.querySelector('.container');
  
    // Use html2canvas to capture the content as an image
    html2canvas(container).then(canvas => {
      // Convert canvas to data URL
      const imageDataUrl = canvas.toDataURL('image/png');
  
      // Ask the user to enter the recipient's email
      const recipientEmail = prompt('Enter recipient\'s email:');
  
      if (recipientEmail) {
        // Use SMTPJS to send the email without specifying the SecureToken
        Email.send({
          Host: "smtp.smtpjs.com",
          Username: "gunagowda971@gmail.com",
          Password: "smtpjs",
          To: recipientEmail,
          From: "gunagowda971@gmail.com",
          Subject: "Name Generator Result",
          Body: `<p>Hi there! Here is the result of the name generator:</p><img src="${imageDataUrl}" alt="Name Generator Result">`
        })
        .then(function(response) {
          console.log('Email sent:', response);
          alert('Email sent successfully!');
        })
        .catch(function(error) {
          console.log('Email failed to send:', error);
          alert('Failed to send email. Please try again.');
        });
      }
    });
  }
  

// ... existing code ...

function openCameraInNewWindow() {
  const newWindow = window.open('camera.html', '_blank', 'width=600,height=400');
  newWindow.onload = function () {
      const photoCanvas = document.getElementById('photoCanvas');
      const captureButton = document.getElementById('captureButton');

      // Message event listener to handle captured photo
      window.addEventListener('message', function (event) {
          if (event.origin === window.location.origin) {
              const photoDataURL = event.data;
              localStorage.setItem('photoDataURL', photoDataURL);

              // Display the captured photo on the main page
              const context = photoCanvas.getContext('2d');
              const img = new Image();
              img.src = photoDataURL;
              img.onload = function () {
                  photoCanvas.width = img.width;
                  photoCanvas.height = img.height;
                  context.drawImage(img, 0, 0, img.width, img.height);
                  photoCanvas.style.display = 'block';
                  captureButton.style.display = 'block';
              };
          }
      });
  };
}

function capturePhoto() {
  const photoCanvas = document.getElementById('photoCanvas');
  const captureButton = document.getElementById('captureButton');

  // Display options to save or retake the photo
  const saveOrRetake = confirm('Do you want to save or retake the photo?');

  if (saveOrRetake) {
      // Save the photo to Google Sheets (implement this part)
      alert('Photo saved to Google Sheets');
  } else {
      // Clear local storage and hide the photo
      localStorage.removeItem('photoDataURL');
      photoCanvas.style.display = 'none';
      captureButton.style.display = 'none';
  }
}

function displayCapturedImage() {
  const capturedImageContainer = document.getElementById('capturedImageContainer');
  const img = new Image();

  // Load the captured image from localStorage
  const photoDataURL = localStorage.getItem('photoDataURL');

  if (photoDataURL) {
      img.src = photoDataURL;
      img.style.borderRadius = '50%'; // Add border-radius for a circular image
      capturedImageContainer.innerHTML = '';
      capturedImageContainer.appendChild(img);
  } else {
      capturedImageContainer.innerHTML = '';
  }
}


function savePhoto() {
  // Post the captured photo back to the main window
  window.opener.postMessage(photoDataURL, window.location.origin);

  // Save the photoDataURL to localStorage
  localStorage.setItem('photoDataURL', photoDataURL);

  window.close();
}



// Call the function to display the captured image when the page loads
window.onload = function() {
  displayCapturedImage();
};

  
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


if (window.location.href.includes('second.html')) {
    const emailButton = document.getElementById('emailButton');

    emailButton.addEventListener('click', function() {
        const generatedNames = localStorage.getItem('generatedNames');
        const subject = encodeURIComponent('Name Generator Result');
        const body = encodeURIComponent(`Hi there! Here is the result of the name generator:%0D%0A%0D%0A${generatedNames}`);

        // Create the mailto link
        const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

        // Open the default email client
        window.location.href = mailtoLink;
    });
}


localStorage.removeItem('photoDataURL');
