let photoDataURL; // Variable to store the captured photo data URL

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        const video = document.getElementById('cameraVideo');
        video.srcObject = stream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
    })
    .catch(function (err) {
        console.error('Error accessing camera:', err);
    });

// ... existing code ...

function captureAndClose() {
    const video = document.getElementById('cameraVideo');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    photoDataURL = canvas.toDataURL('image/png');

    // Display the captured photo to the user
    showCapturedPhoto();

    // Disable the "Capture" button
    document.getElementById('captureButton').disabled = true;
}

// ... existing code ...


function showCapturedPhoto() {
    const photoDisplay = document.getElementById('photoDisplay');
    const img = document.createElement('img');
    img.src = photoDataURL;

    // Display the captured photo
    photoDisplay.innerHTML = '';
    photoDisplay.appendChild(img);

    // Show retake and save buttons
    document.getElementById('retakeButton').style.display = 'inline-block';
    document.getElementById('saveButton').style.display = 'inline-block';
}

function retakePhoto() {
    // Clear the captured photo data URL

    // Enable the "Capture" button
    document.getElementById('captureButton').disabled = false;

    // Hide retake and save buttons
    document.getElementById('retakeButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'none';

    // Clear the displayed photo
    document.getElementById('photoDisplay').innerHTML = '';
}

function savePhoto() {
    // Post the captured photo back to the main window
    window.opener.postMessage(photoDataURL, window.location.origin);
    window.close();
}
