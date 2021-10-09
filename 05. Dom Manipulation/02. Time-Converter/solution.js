function attachEventsListeners() {
    // const buttons = Array.from(document.querySelectorAll('input[type="button"][value="Convert"]'));
    const mainElement = document.getElementsByTagName('main')[0];
    const resultFields = Array.from(document.querySelectorAll('input[type="text"]'));
    // console.log(resultFields);
    mainElement.addEventListener('click', onClick);

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    function convertToDays(unit, number) {
        return number / ratios[unit]
    }

    function onClick(e) {
        if (e.target.id.includes('Btn')) {
            const userInput = e.target.parentElement.querySelector('input[type="text"]');
            if (userInput.value === '') {
                return
            }
            let userDays = convertToDays(userInput.id, Number(userInput.value));
            // console.log(resultFields);
            resultFields.forEach((inputBox) => {
                inputBox.value = userDays * ratios[inputBox.id]
            });
        }
    }
}