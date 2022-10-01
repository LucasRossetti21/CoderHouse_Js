let usuarios = [];
let inputUsuario = document.getElementById("input-usuario");
let inputContraseña = document.getElementById("input-contraseña");
let id = 0;
let prueba = 1
let registerButton = document.getElementById("register-send")

registerButton.addEventListener("click", ()=> {
    registrar()
})

let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"))

function registrar(){
    function Usuario(nombre, contraseña, id){
        this.nombre = nombre
        this.contraseña = contraseña
        this.id= id
    }

    id += 1;

    let nuevoUsuario = new Usuario(`${inputUsuario.value}`, `${inputContraseña.value}`, `${id}`);

    usuarios.push(nuevoUsuario);

    console.log(nuevoUsuario)

    guardarUsuarioStorage()

    window.location = "inicioDeSesion.html"
}


function guardarUsuarioStorage(){
    localStorage.setItem("usuarios", JSON.stringify(usuarios))   
}

