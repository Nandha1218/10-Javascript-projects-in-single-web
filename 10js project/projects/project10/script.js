document.querySelector('.back-btn').addEventListener('click', function() {
    // Check if we're embedded in the portfolio
    if (window.parent && typeof window.parent.returnToProjects === 'function') {
        window.parent.returnToProjects();
    } else {
        // Fallback for standalone viewing
        window.location.href = '/index.html'; // Or your portfolio homepage
    }
});

function detectChar(){

    const input = document.getElementById("inputType").value;

    if(input){

        const unicodeValue = input.charCodeAt(0);
        const result = `The Unicode value of "${input}" is ${unicodeValue}`;
        document.getElementById('result').textContent = result;  

    }else{
        document.getElementById('result').textContent = 'Please Enter a Character';
    }

}