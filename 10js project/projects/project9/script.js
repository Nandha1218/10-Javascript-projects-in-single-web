document.querySelector('.back-btn').addEventListener('click', function() {
    // Check if we're embedded in the portfolio
    if (window.parent && typeof window.parent.returnToProjects === 'function') {
        window.parent.returnToProjects();
    } else {
        // Fallback for standalone viewing
        window.location.href = '/index.html'; // Or your portfolio homepage
    }
});

function isPlaindrome(str){

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr);

    return cleanStr === reversedStr;
}


function plaindromeChecker(){

    const inputText = document.getElementById("inputText");
    const result = document.getElementById("result");

    if(isPlaindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a Palindrome`;
    }else{
        result.textContent = `"${inputText.value}" is Not a Palindrome`;
    }

    result.classList.add('fadeIn');
    inputText.value = "";

}


document.getElementById('checkButton').addEventListener("click",plaindromeChecker);