function solve() {
    let inputText = document.querySelector('#text').value;
    let namingConvention = document.querySelector('#naming-convention').value;

    let transformText = {
        'Camel Case': function (text) {
            return text.toLowerCase()
                .split(' ')
                .map((a,i) => (i !== 0 ) ? a[0].toUpperCase() + a.slice(1) : a)
                .join('')
        },
        'Pascal Case': function (text) {
            return text
                .toLowerCase()
                .split(' ')
                .map((a) => a[0].toUpperCase() + a.slice(1))
                .join('')

        },
        default: () => 'Error!',
    }

    let result = (transformText[namingConvention] || transformText['default'])(inputText)

    let resultContainer = document.querySelector('#result');
    resultContainer.textContent = result;
}

