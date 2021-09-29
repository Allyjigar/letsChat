const formBusca = document.getElementById('formBusca');

function buscaValidate() {
    var acumErrors = 0;

    formBusca.classList.remove('is-invalid');

    var inputBusca = document.forms['formBusca']['busca'];

    if(inputBusca.value == "") {
		inputBusca.classList.add("is-invalid");
		document.getElementById("errorBusca").textContent = "Este campo es obligatorio";
        acumErrors ++;
    }else if(!valida_busca(inputBusca.value)){
		inputBusca.classList.add("is-invalid");
		document.getElementById("errorBusca").textContent = "Introduzca al menos 3 carácteres";
		acumErrors ++;
	}


    if (acumErrors > 0){
        return false;
    }else{
		return true;
	}
    
}

formBusca.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');

}, true);

function valida_busca(text) {
	var regexBusca =  /^[a-zA-ZÀ-ÿ0-9\s\_\-]{3,}$/;
	return regexBusca.test(text) ? true : false;
}
