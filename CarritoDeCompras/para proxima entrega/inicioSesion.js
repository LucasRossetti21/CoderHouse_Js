function inicioSesion(){
    
    let seccionProductos = document.getElementById("seccion-productos")
    seccionProductos.classList.add("seccion-productos-inicio")
    let contenedorInicioSesion = `
    <div id="contenedor-inicio-sesion">
        <div class="titulo-inicio-sesion">
            <span>Registrarse</span>
        </div>
        <div class="inputs-inicio-sesion">
            <input id="input-usuario" placeholder="Ingrese nombre de usuario"></input>
            <input id="input-contraseña" placeholder="Ingrese contraseña"></input>
        </div>
        <div class="button-inicio-sesion">
            <button onclick="logIn()" placeholder="registrarse">Registrarse
        </div>
    </div>`;
    seccionProductos.innerHTML = contenedorInicioSesion
    let navbar = document.getElementById("navbar")
    navbar.classList.add("opacity-cero-pointer-none")
}


function logIn(){
    let inputUsuario = document.getElementById("input-usuario");
    let inputContraseña = document.getElementById("input-contraseña");
    let nombreUsuario = inputUsuario.value
    let contraseñaUsuario = inputContraseña.value
    if(nombreUsuario && contraseñaUsuario){
        let seccionProductos = document.getElementById("seccion-productos");
        seccionProductos.innerHTML = ""
        renderizarProductos()
        let navbarUsuario = document.querySelector(".disabled");
        let saludoUsuario = `Hola ${nombreUsuario}`;
        navbarUsuario.innerHTML = saludoUsuario;
        navbarUsuario.classList.add("saludo-usuario")
        
    } else {inicioSesion()}
    function guardarUsuarioStorage(){
        sessionStorage.setItem("usuario", JSON.stringify(nombreUsuario))
    }
    let navbar = document.getElementById("navbar")
    navbar.classList.remove("opacity-cero-pointer-none")
    guardarUsuarioStorage()

    function llamarUsuarioGuardado(){
        let usuarioGuardado = JSON.parse(sessionStorage.getItem("usuario"))
        nombreUsuario = usuarioGuardado;
    }
    llamarUsuarioGuardado()
}

