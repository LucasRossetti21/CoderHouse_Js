
//GENERADOR DE PRODUCTOS

let seccionProductos = document.getElementById("seccion-productos");

let productos = [
    {id: 1, categoria: "televisor", modelo: "LG 32'", precio: 55000, img: "./image/lg.jpg", tag: "lg LG Lg"},
    {id: 2, categoria: "televisor", modelo: "Samsung 42'", precio: 72000, img: "./image/samsung.jpg", tag: "samsung Samsung SAMSUNG"},
    {id: 3, categoria: "televisor", modelo: "Samsung 50'", precio: 95000, img: "./image/samsung.jpg", tag: "samsung Samsung SAMSUNG"},
    {id: 4, categoria: "televisor", modelo: "Hitachi 60'", precio: 75000, img: "./image/hitachi.jpg", tag: "hitachi Hitachi HITACHI"},
    {id: 5, categoria: "televisor", modelo: "LG 48'", precio: 90000, img: "./image/lg.jpg", tag: "lg LG Lg"},
    {id: 6, categoria: "televisor", modelo: "Sony 50'", precio: 105000, img: "./image/sony.jpg", tag: "sony Sony SONY"},
    {id: 7, categoria: "televisor", modelo: "Hitachi 42'", precio: 57000, img: "./image/hitachi.jpg", tag: "hitachi Hitachi HITACHI"},
    {id: 8, categoria: "televisor", modelo: "Philips 50'", precio: 63000, img: "./image/philips.jpg", tag: "philips Philips PHILIPS"}
]

function renderizarProductos(){
    productos.forEach((producto) => {
        let productoHTML = 
        `<div class="card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.modelo}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <a class="btn btn-comprar" onclick="AgregarAlCarrito(${producto.id})">Añadir al carrito</a>
            </div>
        </div>`;

    seccionProductos.innerHTML += productoHTML;
    })   
}
renderizarProductos()




