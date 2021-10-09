function solve() {
    let userInput = document.getElementById('input');
    let sentences = userInput.value.split('.');
    let output = document.getElementById('output');
    output.innerHTML = '';


    let result = [];
    let numberParagraph = Math.ceil(sentences.length / 3);
    for (let i = 0; i < numberParagraph; i++) {
        result.push([...temp] = sentences.splice(0, 3));
    }
    let returnedText = [];

    result
        .map(a => {
            let text = a.filter(a => a.length > 0).join('.') + '.';
            returnedText.push(text);

        })


    returnedText.forEach((a) => {
        let finalResult = `<p>${a}</p>`;
        if (a === '.'){
            finalResult = ''
        }
        output.innerHTML += finalResult;
    });
    userInput.value = '';
}