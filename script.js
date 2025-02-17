let noBtn = document.getElementById("no-btn");
let yesBtn = document.getElementById("yes-btn");
let size = 16; // Initial font size in pixels
let clickCount = 0; // To track how many times the "No" button is clicked
let videoPlayed = false;  // Track if video has been played
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;

// When "No" is clicked, change the text content and trigger actions
noBtn.addEventListener("click", function () {
    clickCount++; // Increment the click count

    // Change the text based on the number of clicks
    if (clickCount === 1) {
        noBtn.textContent = "Are you sure?";
    } else if (clickCount === 2) {
        noBtn.textContent = "Really?";
    } else if (clickCount === 3) {
        noBtn.textContent = "No, really?";
    } else if (clickCount === 4) {
        noBtn.textContent = "Is it because of F1?";
    } else if (clickCount === 5) {
        noBtn.textContent = "Don't be rash";
        const video = document.getElementById('myVideo');
        const container = document.querySelector('.container');
        
        // Only play video if it hasn't been played before and not on mobile
        if (!videoPlayed && !isMobile) {
            video.style.display = 'block';
            video.style.width = '200px';
            video.style.position = 'absolute';
            video.style.left = '50%';
            video.style.transform = 'translateX(-50%)';
            video.style.top = container.getBoundingClientRect().bottom + 60 + 'px';
            video.play();
            videoPlayed = true;
            
            video.addEventListener('ended', function() {
                video.style.display = 'none';
            });
        }
    } else if (clickCount === 6) {
        noBtn.textContent = "I knew it was because of F1";
    } else if (clickCount === 7) {
        noBtn.textContent = "You stinky";
    } else if (clickCount === 8) {
        noBtn.textContent = "DON'T";
    } else
        noBtn.textContent = "PLEASE"
        
    // Increase the size of "Yes" button gradually
    size *= 1.5; // Increase size by 50% each time
    yesBtn.style.fontSize = `${size}px`;
    yesBtn.style.padding = `${size / 3}px ${size / 2}px`;

    // Once the "Yes" button reaches a certain size, make it full screen
    if (size > window.innerWidth / 4) {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.fontSize = "5rem";
        yesBtn.textContent = "YES";
    }

    // Send the "No" response to Formspree
    const formData = new FormData();
    formData.append('entry.1553765347', 'NO');
    formData.append('entry.1530883291', new Date().toLocaleTimeString());

    fetch('https://formspree.io/f/xwpvbzgp', { // Replace with your Formspree endpoint
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log("No response submitted successfully."); // Debugging log
        } else {
            console.error("No response submission failed."); // Debugging log
        }
    })
    .catch(error => {
        console.error("Error submitting no response:", error); // Debugging log
    });
});

// When "Yes" is clicked, submit to Google Form then redirect
yesBtn.addEventListener("click", function () {
    console.log("Yes button clicked, preparing to submit form."); // Debugging log

    // Prepare form data
    const formData = new FormData();
    formData.append('entry.1553765347', 'YES');
    formData.append('entry.1530883291', new Date().toLocaleTimeString());

    // Use Fetch API to submit the form data
    fetch('https://formspree.io/f/xwpvbzgp', { // Replace with your Formspree endpoint
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log("Form submitted successfully."); // Debugging log
            // Redirect after successful submission
            setTimeout(() => {
                console.log("Redirecting to yes.html"); // Debugging log
                window.location.href = "yes.html";
            }, 1000);
        } else {
            console.error("Form submission failed."); // Debugging log
        }
    })
    .catch(error => {
        console.error("Error submitting form:", error); // Debugging log
    });
});
