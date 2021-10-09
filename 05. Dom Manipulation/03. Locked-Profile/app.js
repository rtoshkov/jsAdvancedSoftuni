function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('div.profile button'));
    const mainContainer = document.getElementById('main');
    mainContainer.addEventListener('click', onClick);

    function toggle(element) {
        const hiddenDiv = element.target.parentElement.querySelector('div')
        const isActive = element.target.parentElement.querySelector('input[type="radio"][value="unlock"]').checked;

        if (!isActive){
            return
        }

        if (element.target.textContent === 'Show more') {
            element.target.textContent = 'Hide it';
            hiddenDiv.style.display = 'block';
        } else {
            element.target.textContent = 'Show more';
            hiddenDiv.style.display = '';
        }
    }

    function onClick(e) {
        if (buttons.includes(e.target)) {
            toggle(e);
        }
    }

}
