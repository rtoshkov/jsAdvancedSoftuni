function subtract() {
    let fistNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let resultElement = document.getElementById('result');

    let result = Number(fistNumber) - Number(secondNumber);
    resultElement.textContent = String(result);
}