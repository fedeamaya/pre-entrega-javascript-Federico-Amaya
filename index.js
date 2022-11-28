let nombreDelUsuario = prompt ("Ingresar nombre de usuario");

if (nombreDelUsuario == "") {

    alert("No ingresaste el nombre de usuario");
}
else {
        alert("Nombre de usuario ingresado " + nombreDelUsuario);
}

let notaDelUsuario = prompt ("Ingrese su comentario");

if (notaDelUsuario.length > 30) {

    alert("Esta entrada excede la cantidad de caracteres disponibles.");
}

else if (notaDelUsuario == "") {
    alert("No ingresaste ningun comentario");
}

else {
    alert("Gracias por su comentario " + notaDelUsuario);
}

function saludar () {
    alert (nombreDelUsuario + " " + notaDelUsuario);
}
saludar()

for (let i = 0; i < 3; i++) {
    confirm("El usuario ${i} te envio solicitud de amistad")
}
  