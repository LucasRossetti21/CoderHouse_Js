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

//BAJAR ICONO DE CARRITO

let containerCart = document.getElementById("container-cart-user");

window.addEventListener("scroll", ()=> {
    if(scrollY > 100){
        agregarCarritoFlotante()
    }

    if(scrollY <= 100){
        sacarCarritoFlotante()
    }
})

let containerCartUserFlotante = document.getElementById("container-cart-user-flotante")

function agregarCarritoFlotante(){
    let carritoFlotante = document.createElement("div");
    carritoFlotante.setAttribute("class", "container-cart-user-flotante")
    carritoFlotante.innerHTML = `
        <div class="icon-carrito-actualizacion" id="icon-carrito-actualizacion"></div>
        <img src="./icon/shopping-cart.svg" alt="" style="width: 20px;" id="icon-carrito" class="icon">
        <img src="./icon/user.svg" alt="" style="width: 23px; color: white;" class="icon">
    `;
    let containerLayout = document.getElementById("container-layout")
    containerLayout.append(carritoFlotante)
}

