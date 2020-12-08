function ChangeGender() {
	var GenderSelect = document.getElementById('Gender').value;
	document.getElementById('novo_genero').disabled =
        (GenderSelect != 'outro');
}

function ValidaCel() {
	var Ncelular = document.getElementById('Cell').value;
	if (Ncelular.length < 11) {
		alert("Número incompleto");
	}
}

function ValidaEmail() {
	var Email = document.getElementById('Email').value;
	if (!Email.match(/@/) && !Email.match(/.com/)) {
		alert("Email inválido");
	}
}