function create(words) {
    const container = document.getElementById('content');
    words.forEach(e => createDivElements(e));
    container.addEventListener('click', onClick);

    function createDivElements(text) {
        let divElement = document.createElement('DIV');
        let pElement = document.createElement('P');
        pElement.textContent = text;
        pElement.style.display = 'none';
        divElement.appendChild(pElement);
        container.appendChild(divElement);
    }

    function onClick(e) {
        if (e.target.tagName === 'DIV'){
            e.target.children[0].style.display = '';
        }
    }
}