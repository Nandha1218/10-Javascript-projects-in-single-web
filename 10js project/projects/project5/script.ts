const emailInput = document.getElementById('email-id') as HTMLInputElement;
const iconDiv = document.getElementById('icon') as HTMLDivElement;
const errorMsg = document.getElementById('error-msg') as HTMLParagraphElement;

emailInput.addEventListener('input', checker);

function checker() {
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

    if (email.match(emailPattern)) {
        iconDiv.innerHTML = '<i class="fa-solid fa-check" style="color: green;"></i>';
        errorMsg.style.display = 'none';
    } else if (email.length === 0) {
        iconDiv.innerHTML = '';
        errorMsg.style.display = 'none';
    }
    else {
        iconDiv.innerHTML = '<i class="fa-solid fa-xmark" style="color: red;"></i>';
        errorMsg.style.display = 'block';
    }
}