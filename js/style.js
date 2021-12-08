const form = document.getElementById('form');
const username = document.getElementById('uname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const pass1 = document.getElementById('pass1');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    let uservalue = username.value.trim();
    let emailvalue = username.value.trim();
    let passvalue = pass.value.trim();
    let pass1value = pass1.value.trim();
    if (emailvalue === '') {
        setError(email, "Email can not be blank");
    } else {
        setSuccess(email, "Success");
    }
    if (uservalue === '') {
        setError(username, "User cannot be blank");
    } else {
        setSuccess(username, "Success");
    }

  

    if (passvalue === '') {
        setError(pass, "Password can not be blank");
    } else {
        setSuccess(pass, "Success");
    }

    if (pass1value === '') {
        setError(pass1, "Password can not be blank");
    } else {
        setSuccess(pass1, "Success");
    }


}

function setError(input, message){
    const formControl =input.parentElement;

    const small = formControl.querySelector('small');
    const ierror = formControl.querySelector('i.error');
    small.innerHTML = message;
    ierror.classList.remove("d-none");

}

function setSuccess(input, message){
    const formControl =input.parentElement;

    const small = formControl.querySelector('small');
    const ierror = formControl.querySelector('i.success');
    small.innerHTML = message;
    ierror.classList.remove("d-none");
}