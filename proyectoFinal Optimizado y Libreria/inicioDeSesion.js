let usuarios = [];
let inputUsuario = document.getElementById("input-usuario");
let inputContraseña = document.getElementById("input-contraseña");
let id = 0;
let prueba = 1
let iniciarButton = document.getElementById("inicio-send")

//INICIO DE SESION

function ingresar(){
    let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"))
    let inputUsuario = document.getElementById("input-usuario").value;

    for(const usuario of usuariosGuardados){
        usuarios.push(usuario)
    }

    let usuarioEncontrado = usuarios.find(usuario => usuario.nombre === inputUsuario)

    usuarioEncontrado.nombre == inputUsuario ? window.location = "productos.html" : window.location = "inicioDeSesion.html";

    let usuarioIngresado = ()=>{
        let usuarioIngresado = inputUsuario;
        localStorage.setItem("ingreso", JSON.stringify(usuarioIngresado));
    }

    usuarioIngresado()
}

iniciarButton.addEventListener("click", ()=> {
    ingresar();
})




