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

const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#username")
const inputPass = document.querySelector("#password")
const loginIncorrecto = document.querySelector("#login-incorrecto")
const contenedorForm = document.querySelector(".container-login")
const logout = document.querySelector("#login-out")

const datosUsuario = {
    user: "federico",
    password: "coder123"
}

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ) {
        subirAlLs("login", true)
        contenedorForm.style.display = "none"  
        logout.style.display = "block"              
    } else {        
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "1px solid red"
        inputUser.style.border = "1px solid red"
    }
}

function validarLogin ( clave ) {
    if ( clave !== true ) {
        contenedorForm.style.display = "flex"
        logout.style.display = "none"        
    } else {
        contenedorForm.style.display = "none"
        logout.style.display = "block"        
    }
}

validarLogin(obtenerDelLs("login"))

logout.onclick = () => {
    localStorage.removeItem( "login" )
    console.log("cerrar sesion")
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
}


