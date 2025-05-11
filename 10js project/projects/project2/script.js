document.querySelector('.back-btn').addEventListener('click', function() {
    // Check if we're embedded in the portfolio
    if (window.parent && typeof window.parent.returnToProjects === 'function') {
        window.parent.returnToProjects();
    } else {
        // Fallback for standalone viewing
        window.location.href = '/index.html'; // Or your portfolio homepage
    }
});

const switchBtn = document.querySelector(".switch");
const body = document.body;

switchBtn.addEventListener("click", () => {
    body.classList.toggle("on");
    switchBtn.classList.toggle("active");
});