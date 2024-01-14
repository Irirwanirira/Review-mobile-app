const btn = document.getElementById("check-btn");
const inputL = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

function alertMsg(){
    alert("Please input a value")
}

function checkPalindrome(input) {
    const text = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = text.split('').reverse().join('');

    if(input === ""){
        alertMsg();
    }else if (text === reversedText) {
        resultDiv .innerText = `${input} is a palindrome `
    } else {
        resultDiv .innerText = `${input} is not a palindrome `
    }

}

btn.addEventListener("click",(e)=> {
    e.preventDefault();
    const value = inputL.value;
    checkPalindrome(value)
})

  
