// camera.js

// Function to initiate camera access
async function initCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.querySelector('video');
    video.srcObject = stream;
}

// Function to capture image from video stream
function captureImage() {
    const canvas = document.createElement('canvas');
    const video = document.querySelector('video');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    return canvas.toDataURL('image/jpeg');
}

// Function to call image description API
async function describeImage(imageData) {
    const response = await fetch('https://api.example.com/describe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
    });
    const data = await response.json();
    return data.description;
}

// Example Usage
initCamera();

// Capture image and get description after clicking a button
document.querySelector('#captureButton').addEventListener('click', async () => {
    const imageData = captureImage();
    const description = await describeImage(imageData);
    console.log(description);
});