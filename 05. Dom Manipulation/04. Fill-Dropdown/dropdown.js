function addItem() {
    const userInputText = document.getElementById('newItemText');
    const userInputValue = document.getElementById('newItemValue');
    const selectElement = document.getElementById('menu');


    const option = document.createElement('OPTION');
    option.value = userInputValue.value;
    option.textContent = userInputText.value;
    selectElement.appendChild(option);
    userInputText.value = '';
    userInputValue.value = '';


}