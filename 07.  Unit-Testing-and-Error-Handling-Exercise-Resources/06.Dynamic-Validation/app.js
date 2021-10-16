function validate() {
    let inputBox = document.getElementById('email');
    inputBox.addEventListener('change', onChange);
    const regPath = /^[a-z]+@[a-z]+.[a-z]+/;

    function onChange(e){
        let email = e.target.value;
        regPath.test(email) ? e.target.classList.remove('error') : e.target.classList.add('error');

    }
}