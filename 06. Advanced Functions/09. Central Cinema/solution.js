function solve() {
    let onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', onScreen);
    let clearAllButton = document.querySelector('#archive > button');
    clearAllButton.addEventListener('click', onClearAll);

    let [movieName, hallName, ticketPrice] = document.querySelectorAll('#container input');

    function createElement(valueMovieName, valueHallName, valueTicketPrice) {
        let elementLi = document.createElement('LI');
        let elementSpan = document.createElement('SPAN');
        elementSpan.textContent = valueMovieName;
        let elementStrong = document.createElement('STRONG');
        elementStrong.textContent = `Hall: ${valueHallName}`;

        let elementDiv = document.createElement('DIV');
        let elementStrongTwo = document.createElement('STRONG');
        elementStrongTwo.textContent = valueTicketPrice.toFixed(2);
        let elementInput = document.createElement('INPUT');
        elementInput.setAttribute('placeholder', 'Ticket Sold');
        let buttonArchive = document.createElement('BUTTON');
        buttonArchive.textContent = 'Archive';
        buttonArchive.addEventListener('click', onArchiveButton);

        let elementUL = document.querySelector('#movies ul');
        elementUL.appendChild(elementLi);
        elementLi.appendChild(elementSpan);
        elementLi.appendChild(elementStrong);
        elementLi.appendChild(elementDiv);
        elementDiv.appendChild(elementStrongTwo);
        elementDiv.appendChild(elementInput);
        elementDiv.appendChild(buttonArchive);
    }

    function onScreen(e) {
        e.preventDefault();
        let valueMovieName = movieName.value;
        let valueHallName = hallName.value;
        let valueTicketPrice = ticketPrice.value;

        movieName.value = '';
        hallName.value = '';
        ticketPrice.value = '';

        if (valueMovieName.trim().length === 0 || valueHallName.trim().length === 0 ||
            valueTicketPrice.trim().length === 0  ) {
            return 'incorrect data';
        }

        if (isNaN(Number(valueTicketPrice))){
            return 'nope'
        }

        createElement(valueMovieName, valueHallName, Number(valueTicketPrice));

    }


    function onArchiveButton(e) {
        let ticketCount = e.target.parentElement.getElementsByTagName('input')[0].value;
        let ticketPrice = e.target.parentElement.querySelector('strong').textContent;
        if (ticketCount.trim() === '' || isNaN(Number(ticketCount))) {
            return 'Ticket Price not filled correctly';
        }

        let totalAmount = Number(ticketPrice) * Number(ticketCount)
        let movingLi = e.target.parentElement.parentElement;
        movingLi.remove();

        let archiveUl = document.querySelector('#archive ul');
        archiveUl.appendChild(movingLi);
        movingLi.getElementsByTagName('div')[0].remove();
        console.log(ticketPrice,ticketCount);
        movingLi.getElementsByTagName('strong')[0].textContent = `Total amount: ${totalAmount
            .toFixed(2)}`;

        let createDeleteButton = document.createElement('button');
        createDeleteButton.addEventListener('click', onDelete);
        createDeleteButton.textContent = 'Delete';
        movingLi.appendChild(createDeleteButton);
    }

    function onDelete(e){
       e.target.parentElement.remove();
    }

    function onClearAll(e){
        let forDeletionLi = document.querySelectorAll('#archive ul li');
        Array.from(forDeletionLi).forEach((e) => e.remove());

    }



}