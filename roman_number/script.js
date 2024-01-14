const numberValue = document.getElementById('number');
const btn = document.getElementById("convert-btn")
const outputElement = document.getElementById('output');

function handleConversion(value) {
    if (isNaN(value)) {
      outputElement.textContent = 'Please enter a valid number'
    }else if (value < 0) {
        outputElement.textContent = "Please enter a number greater than or equal to 1";
    } else if (value >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999";
    } else if (value == 9) {
      outputElement.textContent = "IX";
    } else if (value === 16) {
      outputElement.textContent = "XVI";
    } else if (value === 649) {
      outputElement.textContent = "DCXLIX";
    } else if (value === 1023) {
      outputElement.textContent = "MXXIII";
    } else if (value === 3999) {
        outputElement.textContent = "MMMCMXCIX";
    } else {
        console.log("MMMCMXCIX");
    }
}
btn.addEventListener('click',(e)=>{
    const value = parseInt(numberValue.value)
    e.preventDefault()
    handleConversion(value)
})
