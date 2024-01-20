const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const explanation = document.getElementById("result-expl");

const correctText = "Congrats! It is a palindrome."
const incorrectText = "It is not a palindrome. Boo."

const alphaNumReg = /[^a-zA-Z0-9]/g;

function checkPalindrome() {
    if (textInput.value.length > 0) {
        console.log(textInput.value.replaceAll(alphaNumReg, ''));
        displayResult(isPalindrome(textInput.value.replaceAll(alphaNumReg, '').toLowerCase()));
    }
    else 
        alert("Please input a value");
}

function isPalindrome(text) {
    for (let i = 0; i < text.length/2; ++i) {
        if (text[i] != text[text.length - 1 - i])
            return false;
    }
    return true;
}

function displayResult(isCorrect) {
    if (isCorrect) {
        result.classList.remove('boo')
        result.classList.add('congrats')
        result.innerHTML = `
        <span id="word"></span> is a palindrome.`
        explanation.innerHTML = `
        <h2>WHAT DOES THIS MEAN?</h2>
        <h3>THE STRING OF TEXT YOU ENTERED IS SPELLED THE SAME BACKWARDS AND FORWARDS.</h3>`
        const wordSpan = document.getElementById("word");
        wordSpan.innerText = textInput.value;
    } else {
        result.classList.remove('congrats')
        result.classList.add('boo')
        result.innerHTML = `
        <span id="word"></span> is not a palindrome.`
        explanation.innerHTML = `
        <h2>WHAT DOES THIS MEAN?</h2>
        <h3>THE STRING OF TEXT YOU ENTERED IS <span class="incorrect">NOT</span> SPELLED THE SAME BACKWARDS AND FORWARDS.</h3>` 
        const wordSpan = document.getElementById("word");
        wordSpan.innerText = textInput.value;
    }
}

checkButton.addEventListener("click", checkPalindrome);
textInput.addEventListener("keydown", function(e) {
    if (e.code === "Enter")
        checkPalindrome();
});