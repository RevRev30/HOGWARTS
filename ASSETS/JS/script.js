document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.launch-btn').addEventListener('click', function() {
        // Display GIF overlay
        var gifOverlay = document.createElement('div');
        gifOverlay.classList.add('gif-overlay');
        document.body.appendChild(gifOverlay);

        // After a delay (simulate loading time), redirect to the next page
        setTimeout(function() {
            window.location.href = "generate.html";
            // Remove the GIF overlay
            document.body.removeChild(gifOverlay);
        }, 3000); // Adjust the delay (in milliseconds) as needed
    });
});
