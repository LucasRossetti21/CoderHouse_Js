let container = document.querySelector(".container-layout");
let menu = document.querySelector(".container-menu")
let menuUser = document.getElementById("menu-user")
let menuIcon = document.getElementById("menu-icon")
let menuTitleIcon = document.getElementById("menu-title-icon")
let containerLayout = document.getElementById("container-layout")

menuIcon.addEventListener("click", ()=> {
    menu.classList.add("container-menu-ampliado");
})

seccionProductos.addEventListener("click", ()=> {
    menu.classList.remove("container-menu-ampliado")
})


window.addEventListener("load", ()=> {
    let usuariosGuardados = JSON.parse(localStorage.getItem("ingreso"))
    let menuPresentacion = `<p class="menu-presentacion-parrafo">Hola ${usuariosGuardados}!</p><img src="./icon/corner-right-down.svg" style="width: 20px"></img>`
    menuUser.innerHTML = menuPresentacion;
})

