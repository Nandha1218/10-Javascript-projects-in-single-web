// Back button functionality
document.querySelector('.back-btn').addEventListener('click', function() {
    // Check if we're embedded in the portfolio
    if (window.parent && typeof window.parent.returnToProjects === 'function') {
        window.parent.returnToProjects();
    } else {
        // Fallback for standalone viewing
        window.location.href = '/index.html'; // Or your portfolio homepage
    }
});

// Number generation functionality
const generateBtn = document.getElementById("generate-btn");
const numberElement = document.getElementById("random-number");

generateBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numberElement.textContent = randomNumber;

    // Reset animation
    numberElement.classList.remove("glow");
    void numberElement.offsetWidth; // Trigger reflow
    numberElement.classList.add("glow");
});