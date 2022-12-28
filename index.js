const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")

botonModos.onclick = () => { 
    body.classList.toggle("modo-oscuro")
    if ( body.className === "modo-claro modo-oscuro"){
        botonModos.textContent = "Modo claro"
    } else {
        botonModos.textContent = "Modo oscuro"
    }
}


const username = document.querySelector("username")
const password = document.querySelector("password")
const button = document.querySelector("button")
const formlogin = document.querySelector("button")

button.addEventListener('click', (event) => {
    event.preventDefault()
})

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}
const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

const datosUsuario = {
    username: "federico",
    password: "coder123"
}

formlogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( username.value === datosUsuario.user && password.value === datosUsuario.password ) {
        subirAlLs("login", true)             
    }
}
