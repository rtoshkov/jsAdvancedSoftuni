window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const table = document.getElementById('furniture-list');
    const revenue = document.querySelector('.total-price');
    const btnAdd = document.getElementById('add');
    btnAdd.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();
        inputs = {
            model: model.value.trim(),
            year: year.value.trim(),
            description: description.value.trim(),
            price: price.value.trim()
        }

        if (inputs.model === ''
            || inputs.year === ''
            || inputs.description === ''
            || inputs.price === '') {
            return;
        }



        if (isNaN(Number(inputs.year))
            || Number(inputs.year) <= 0
            || isNaN(Number(inputs.price))
            || Number(inputs.price) <= 0) {
            return;
        }

        inputs.price = Number(inputs.price);

        //IMPORTANT FUNCTION
        function createEl(type, attributes, ...content) {
            const element = document.createElement(type);

            for (let attr in attributes) {
                element[attr] = attributes[attr];
            }

            for (let el of content) {
                if (typeof el === 'string' || typeof el === 'number') {
                    el = document.createTextNode(el);
                }
                element.appendChild(el);
            }
            return element;
        }

        let moreBtn = document.createElement('BUTTON');
        moreBtn.textContent = 'More Info';
        moreBtn.className = 'moreBtn';
        moreBtn.addEventListener('click', onMore);

        let buyBtn = document.createElement('BUTTON');
        buyBtn.textContent = 'Buy it';
        buyBtn.className = 'buyBtn';
        buyBtn.addEventListener('click', onBuy);

        const tableRow_one = createEl('TR', {className: 'info'},
            createEl('TD', {textContent: inputs.model}),
            createEl('TD', {textContent: inputs.price.toFixed(2)}),
            createEl('TD', {},
                moreBtn,
                buyBtn
            )
        );

        const tableRow_two = createEl('TR', {className: 'hide'},
            createEl('TD', {textContent: `Year: ${inputs.year}`}),
            createEl('TD', {colSpan: 3, textContent: `Description: ${inputs.description}`})
        )

        table.appendChild(tableRow_one);
        table.appendChild(tableRow_two);

        year.value = '';
        model.value = '';
        description.value = '';
        price.value = '';
    }


    function onMore(e) {
        e.target.textContent === 'More Info' ? e.target.textContent = 'Less Info' : e.target.textContent = 'More Info';
        const hiddenTD = e.target.parentNode.parentNode.nextSibling;
        hiddenTD.style.display === 'contents' ? hiddenTD.style.display = 'none' : hiddenTD.style.display = 'contents';
    }

    function onBuy(e) {
        let trInfo = e.target.parentNode.parentNode;
        let trHide = trInfo.nextSibling;
        let price = Number(Array.from(trInfo.querySelectorAll('td'))[1].textContent);
        trInfo.remove();
        trHide.remove();
        let totalPrice = Number(revenue.textContent) + price
        revenue.textContent = totalPrice.toFixed(2);
    }
}
