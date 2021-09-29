const formRegister = document.getElementById('formRegister');

function registerValidate() {
    var acumErrors = 0;

    formRegister.classList.remove('is-invalid');

    var inputUserRegister = document.forms['formRegister']['usuario'];
    var inputEmailRegister = document.forms['formRegister']['email'];
    var inputPasswordRegister = document.forms["formRegister"]['password'];
    var inputRepass = document.forms['formRegister']['repassword'];
    var inputProvincia = document.forms['formRegister']['provincia'];
    var checkBases = document.forms['formRegister']['bases'];

    if(inputUserRegister.value == "") {
		inputUserRegister.classList.add("is-invalid");
		document.getElementById("errorUsuario").textContent = "Este campo es obligatorio";
        acumErrors ++;
    }else if(!valida_usuario(inputUserRegister.value)){
		inputUserRegister.classList.add("is-invalid");
		document.getElementById("errorUsuario").textContent = "El nombre de usuario debe contener entre 5 y 10 carácteres";
		acumErrors ++;
	}

    if(inputEmailRegister.value == "") {
		inputEmailRegister.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrors ++;
    }else if(!valida_emailReg(inputEmailRegister.value)){
		inputEmailRegister.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Por favor, escriba una dirección de correo válida";
		acumErrors ++;
	}


    if(inputPasswordRegister.value == "") {
		inputPasswordRegister.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
		acumErrors ++;
	} else if(!valida_passReg(inputPasswordRegister.value)){
		inputPasswordRegister.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "La contraseña debe contener al menos 8 carácteres, una letra mayúscula, una minúscula y un número";
		acumErrors ++;
	}

    if(inputRepass.value == "") {
		inputRepass.classList.add("is-invalid");
		document.getElementById("errorRepass").textContent = "Este campo es obligatorio";
		acumErrors ++;
	} else if(inputRepass.value != inputPasswordRegister.value){
		inputRepass.classList.add("is-invalid");
		document.getElementById("errorRepass").textContent = "Las contraseñas deben ser iguales";
		acumErrors ++;
	}

    if(inputProvincia.value == "") {
		inputProvincia.classList.add("is-invalid");
		document.getElementById("errorProvincia").textContent = "Este campo es obligatorio";
		acumErrors ++;
	} 

    if(!checkBases.checked) {
		checkBases.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Debes aceptar la política de privacidad";
		acumErrors ++;
	}


    if (acumErrors > 0){
        return false;
    }else{
		return true;
	}
    
}

formRegister.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');

}, true);

function valida_usuario(user) {
    var regexUser = /^[a-zA-Z0-9\_\-]{5,10}$/;
    return regexUser.test(user) ? true : false;
}

function valida_emailReg(email) {
	var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regexEmail.test(email) ? true : false;
}

function valida_passReg(passR) {
    var regexPassReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
    return regexPassReg.test(passR) ? true : false;
}


