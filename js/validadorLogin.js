const formLogin = document.getElementById('formLogin');

function loginValidate() {
    var acumErrors = 0;

    formLogin.classList.remove('is-invalid');

    var inputEmailLogin = document.forms['formLogin']['email'];
    var inputPasswordLogin = document.forms["formLogin"]["password"];

    if(inputEmailLogin.value == "") {
		inputEmailLogin.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrors ++;
    }else if(!valida_email(inputEmailLogin.value)){
		inputEmailLogin.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Por favor, escriba una dirección de correo válida";
		acumErrors ++;
	}

    if(inputPasswordLogin.value == "") {
		inputPasswordLogin.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
		acumErrors ++;
	} else if(!valida_pass(inputPasswordLogin.value)){
		inputPasswordLogin.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "La contraseña debe contener al menos 8 carácteres, una letra mayúscula, una minúscula y un número";
		acumErrors ++;
	}

    if (acumErrors > 0){
        return false;
    }else{
		return true;
	}
    
}

formLogin.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');

}, true);

function valida_email(email) {
	var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regexEmail.test(email) ? true : false;
}

function valida_pass(pass) {
    var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regexPass.test(pass) ? true : false;
}




