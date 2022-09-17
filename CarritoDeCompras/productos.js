
//GENERADOR DE PRODUCTOS

let seccionProductos = document.getElementById("seccion-productos");

let productos = [
    {id: 1, categoria: "televisor", modelo: "LG 32'", precio: 55000, img: "./image/lg.jpg", tag: "lg LG Lg"},
    {id: 2, categoria: "televisor", modelo: "Samsung 42'", precio: 72000, img: "./image/samsung.jpg", tag: "samsung Samsung SAMSUNG"},
    {id: 3, categoria: "televisor", modelo: "Samsung 50'", precio: 95000, img: "./image/samsung.jpg", tag: "samsung Samsung SAMSUNG"},
    {id: 4, categoria: "televisor", modelo: "Hitachi 60'", precio: 75000, img: "./image/hitachi.jpg", tag: "hitachi Hitachi HITACHI"},
    {id: 5, categoria: "televisor", modelo: "LG 48'", precio: 90000, img: "./image/lg.jpg", tag: "lg LG Lg"},
    {id: 6, categoria: "televisor", modelo: "Sony 50'", precio: 105000, img: "./image/sony.jpg", tag: "sony Sony SONY"},
    {id: 7, categoria: "televisor", modelo: "Hitachi 42'", precio: 57000, img: "./image/hitachi.jpg", tag: "sentey Sentey SENTEY"},
    {id: 8, categoria: "televisor", modelo: "Philips 50'", precio: 63000, img: "./image/philips.jpg", tag: "philips Philips PHILIPS"}
]

function renderizarProductos(){
    productos.forEach((producto) => {
        let productoHTML = 
        `<div class="col-8 col-sm-5 col-md-3 col-lg-4 card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.modelo}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <a href="#" class="btn btn-warning btn-comprar" onclick="AgregarAlCarrito(${producto.id})">Añadir al carrito</a>
            </div>
        </div>`;

    seccionProductos.innerHTML += productoHTML;
    })
}

renderizarProductos()

//AGREGAR PRODUCTOS AL CARRITO

let carrito = []
let carritoProductos = document.getElementById("carrito-productos")

function AgregarAlCarrito(id){

    let productoAñadido = productos.find(producto => producto.id === id);
    carrito.push(productoAñadido);
    carritoProductos.innerHTML = ""; 
    carrito.forEach(producto => {
        let productoHTML = 
        `<div class="col-10 card-carrito" style="width: 12rem;">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.modelo}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <a href="#" class="btn btn-warning btn-eliminar" onclick="EliminarProducto(${producto.id})">Eliminar</a>
            </div>
        </div>`;

        carritoProductos.innerHTML += productoHTML;
    });
}

function EliminarProducto(id){
    let productoEliminado = carrito.find(producto => producto.id === id);
    console.log(productoEliminado)
    carritoProductos.remove(productoEliminado)
}

let cajaCarrito = document.getElementById("navbar__carrito");

cajaCarrito.addEventListener("click", ()=> {
    let carritoContenedor = document.getElementById("carrito-contenedor")
    carritoContenedor.classList.add("mostrar-carrito-contenedor")
})

let carritoCloseIcon = document.getElementById("carrito-close-icon")

carritoCloseIcon.addEventListener("click", cerrarCarrito)

function cerrarCarrito(){
    let carritoContenedor = document.getElementById("carrito-contenedor");
    carritoContenedor.classList.remove("mostrar-carrito-contenedor");
}

seccionProductos.addEventListener("click", cerrarCarrito)

//INFORMACION DEL NAVBAR / INPUT / BUTTON

let inputBuscar = document.getElementById("navbar__input");
let botonBuscar = document.getElementById("navbar__button");

botonBuscar.addEventListener("click", ()=>{
    seccionProductos.innerHTML = "";
    let resultadoBusqueda = productos.filter(item => item.tag.includes(inputBuscar.value));
    for(let producto of resultadoBusqueda){
        let card = 
        `<div class="col-8 col-sm-5 col-md-3 col-lg-4 card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.modelo}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <a href="#" class="btn btn-warning btn-comprar" onclick="AgregarAlCarrito(${producto.id})">Añadir al carrito</a>
            </div>
        </div>`;

        seccionProductos.innerHTML += card
    }

    if(inputBuscar.value == false){
        renderizarProductos()
    }
    
    else if(resultadoBusqueda == false){
        seccionProductos.classList.add("flex-center")
        seccionProductos.innerHTML = "<p>No se encontraron resultados</p>";
    }
})




