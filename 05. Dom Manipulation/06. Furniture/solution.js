function solve() {
    const [generateButton, buyButton] = document.querySelectorAll('#exercise button');
    generateButton.addEventListener('click', populateTable);
    buyButton.addEventListener('click', calcShoppingCart);
    const table = document.querySelectorAll('.wrapper tbody')[0];
    const cartInfo = document.querySelectorAll('#exercise  textarea')[1];


    function generateDOM(name, price, decFactor, img) {
        const elementTR = document.createElement('TR');
        const elementTdImg = document.createElement('TD');
        const elementImg = document.createElement('IMG');

        elementImg.src = img;
        elementTdImg.appendChild(elementImg);
        elementTR.appendChild(elementTdImg);

        const elementTdName = document.createElement('TD');
        const elementP = document.createElement('P');
        elementP.textContent = name;
        elementTdName.appendChild(elementP);
        elementTR.appendChild(elementTdName);

        const elementTdPrice = document.createElement('TD');
        const elementP2 = document.createElement('P');
        elementP2.textContent = price;
        elementTdPrice.appendChild(elementP2);
        elementTR.appendChild(elementTdPrice);

        const elementTdDef = document.createElement('TD');
        const elementP3 = document.createElement('P');
        elementP3.textContent = decFactor;
        elementTdDef.appendChild(elementP3);
        elementTR.appendChild(elementTdDef);


        const elementTdCheck = document.createElement('TD');
        const elementInput = document.createElement('INPUT');
        elementInput.type = 'checkbox';
        elementTdCheck.appendChild(elementInput);
        elementTR.appendChild(elementTdCheck);


        table.appendChild(elementTR);

    }


    function populateTable(e) {
        let itemsJSON = JSON.parse(e.target.parentElement.getElementsByTagName('textarea')[0].value);
        for (let item of itemsJSON) {
            generateDOM(item.name, item.price, item.decFactor, item.img);
        }

    }


    // SECOND PART OF THE EXERCISE
    function calcShoppingCart(e) {
        let checkedItems = Array.from(table.querySelectorAll('input[type="checkbox"]:checked'));
        let price = 0;
        let name = [];
        let decorator = 0;
        for (let inputBox of checkedItems) {
            let row = Array.from(inputBox.parentElement.parentElement.children);
            name.push(row[1].textContent);
            price += Number(row[2].textContent);
            decorator += Number(row[3].textContent);

        }

        //
        name = Array.from(new Set(name));
        // decorator = decorator / checkedItems.length;

        let result = `Bought furniture: ${name.join(', ')}\n`;
        result += `Total price: ${price.toFixed(2)}\n`
        result += `Average decoration factor: ${decorator}`
        cartInfo.value = result;


    }

}



