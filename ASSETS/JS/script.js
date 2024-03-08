document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('exitButton').addEventListener('click', function() {
        // Set flag in localStorage
        localStorage.setItem('exitClicked', true);
        // Close the window
        window.location.replace('about:blank');
    });

    document.querySelector('.launch-btn').addEventListener('click', function() {
        // Display GIF overlay
        var gifOverlay = document.createElement('div');
        gifOverlay.classList.add('gif-overlay');
        document.body.appendChild(gifOverlay);

        // After a delay (simulate loading time), redirect to the next page
        setTimeout(function() {
            window.location.href = "https://revrev30.github.io/hogwarts/generate.html";
            // Remove the GIF overlay
            document.body.removeChild(gifOverlay);
        }, 3000); // Adjust the delay (in milliseconds) as needed
    });
});
