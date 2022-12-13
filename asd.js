// CASO ECOMMERCE

// * TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES
// * LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY
// * EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

// 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
//     - id
//     - producto
//     - precio
//     - fechaVencimiento (en el caso de que tenga una)
//     - descripción
//     - categoría (si tiene una)
//     - oferta (booleano)

// Quiero que algunos de los elementos tengan un true en oferta.

// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
// Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos: 
//     - [...array] ---> spread operator
//     - array.slice() ---> copia segura en otra variable
//     - [].concat(array) ---> copia segura en otra variable

// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

// 5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().











// Let nombreDelUsuario = prompt ("Ingresar nombre de usuario");

// if (nombreDelUsuario == "") {

//     alert("No ingresaste el nombre de usuario");
// }
// else {
//         alert("Nombre de usuario ingresado " + nombreDelUsuario);
// }

// let notaDelUsuario = prompt ("Ingrese su comentario");

// if (notaDelUsuario.length > 30) {

//     alert("Esta entrada excede la cantidad de caracteres disponibles.");
// }

// else if (notaDelUsuario == "") {
//     alert("No ingresaste ningun comentario");
// }

// else {
//     alert("Gracias por su comentario " + notaDelUsuario);
// }

// function saludar () {
//     alert (nombreDelUsuario + " " + notaDelUsuario);
// }
// saludar()

// for (let i = 0; i < 3; i++) {
//     confirm("El usuario ${i} te envio solicitud de amistad")
// }
  