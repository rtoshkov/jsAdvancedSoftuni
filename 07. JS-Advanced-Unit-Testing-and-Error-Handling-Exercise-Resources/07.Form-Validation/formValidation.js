function validate() {
    let checkBox = document.getElementById('company');
    checkBox.addEventListener('change', onChange);
    let hiddenFieldset = document.getElementById('companyInfo');
    let buttonSubmit = document.getElementById('submit');
    buttonSubmit.addEventListener('click', onClick);

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let companyNumber = document.getElementById('companyNumber');
    let validBox = document.getElementById('valid')



    function onChange(e){
        if (e.target.checked){
            hiddenFieldset.style.setProperty('display', 'block');
        }else{
            hiddenFieldset.style.setProperty('display', 'none');
        }
    }

    function errorField(a){
        a.style.setProperty('border', '3px solid red');
    }

    function validField(a){
        a.style.setProperty('border', 'none');
    }


    function checkCompany(){
        if(checkBox.checked){
            return Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999;
        }
        return true;
    }

    function onClick(e){
        e.preventDefault();
        const usernameRegex = /^[a-zA-Z1-9]{3,20}$/;
        const passwordRegex = /^[\w]{5,15}$/;
        const emailRegex = /^.*@.*\..*$/;
        let usernameValidation = usernameRegex.test(username.value);
        let passwordValidation = passwordRegex.test(password.value);
        if(password.value !== confirmPassword.value){
            passwordValidation = false;
        }
        let emailValidation = emailRegex.test(email.value);
        let companyValidation = checkCompany();


        usernameValidation ? validField(username) : errorField(username);
        passwordValidation ? validField(password) : errorField(password);
        passwordValidation ? validField(confirmPassword) : errorField(confirmPassword);
        emailValidation ? validField(email) : errorField(email);
        companyValidation ? validField(companyNumber) : errorField(companyNumber);

        if(usernameValidation && passwordValidation && emailValidation && companyValidation){
            validBox.style.setProperty('display', 'block');
        }else{
            validBox.style.setProperty('display', 'none');
        }

    }

}
