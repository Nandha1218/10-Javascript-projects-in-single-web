document.querySelector('.back-btn').addEventListener('click', function() {
    // Check if we're embedded in the portfolio
    if (window.parent && typeof window.parent.returnToProjects === 'function') {
        window.parent.returnToProjects();
    } else {
        // Fallback for standalone viewing
        window.location.href = '/index.html'; // Or your portfolio homepage
    }
});

const btnElement = document.querySelector('button');
const spanElement = document.getElementById('update_name');
const backgroundElement = document.querySelector('.background');

btnElement.onclick = function() {
    // Step 1: Add blur to the background
    backgroundElement.classList.add('blur');

    // Step 2: Ask for the name
    setTimeout(() => {
        const yourName = prompt("Please Enter Your Name ✨");

        // Step 3: Remove the blur
        backgroundElement.classList.remove('blur');

        // Step 4: Update text with animation
        if (yourName) {
            spanElement.textContent = yourName;
            spanElement.classList.remove('fade-in');
            void spanElement.offsetWidth; // reflow trick
            spanElement.classList.add('fade-in');
        }
    }, 300); // small delay to see blur before prompt
}
