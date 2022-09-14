let seccionCarrito = document.getElementById('seccion-carrito');

//CODIGO DE LOS ARTICULOS Y EL FILTRO

let productos = [
    {id: 1, categoria: "televisor", modelo: "hitachi", precio: 45000},
    {id: 2, categoria: "televisor", modelo: "samsung", precio: 72000},
    {id: 3, categoria: "televisor", modelo: "lg", precio: 79000},
    {id: 3, categoria: "televisor", modelo: "phillips", precio: 99000},
    {id: 3, categoria: "televisor", modelo: "samsung", precio: 120000},
]

let buttonHome = document.getElementById('btn-home');

window.addEventListener('load', ()=> {
    for(let producto of productos){
        let cajaProducto = document.createElement('div');
        cajaProducto.setAttribute("class", "col-8 col-sm-5 col-md-5 col-lg-3 col-xl-3 caja-producto")
        cajaProducto.innerHTML = `
        <p>Categoria: ${producto.categoria}</p>
        <p>Modelo del producto: ${producto.modelo}</p>
        <p>Precio: ${producto.precio}</p>
        <button class="boton-comprar" id="buy-button">Añadir al carrito</button>`;
                                
        seccionCarrito.append(cajaProducto);
    }
})

let inputNavbar = document.getElementById("input-navbar");
let inputNavbarButton = document.getElementById("button-navbar")
let form = document.getElementById("form")

inputNavbarButton.addEventListener("click", ()=> {
    seccionCarrito.innerHTML = "";
    let resultadoBusqueda = productos.filter(item => item.modelo === inputNavbar.value);
    for(let item of resultadoBusqueda){
        let cajaProducto = document.createElement("div");
        cajaProducto.setAttribute("class", "col-8 col-md-5 col-lg-3 col-xl-3 caja-producto")
        cajaProducto.innerHTML = `
        <p>Categoria: ${item.categoria}</p>
        <p>Modelo del producto: ${item.modelo}</p>
        <p>Precio: ${item.precio}</p>
        <button class="boton-comprar">Añadir al carrito</button>`;                       
        seccionCarrito.append(cajaProducto);
    }
    if(resultadoBusqueda == false){
        seccionCarrito.innerHTML = '<p>Sin resultados</p>'
    }

    if(inputNavbar.value === ""){
        seccionCarrito.innerHTML = "";
        for(let producto of productos){
            let cajaProducto = document.createElement('div');
            cajaProducto.setAttribute("class", "col-8 col-sm-5 col-md-5 col-lg-3 col-xl-3 caja-producto")
            cajaProducto.innerHTML = `
            <p>Categoria: ${producto.categoria}</p>
            <p>Modelo del producto: ${producto.modelo}</p>
            <p>Precio: ${producto.precio}</p>
            <button class="boton-comprar">Añadir al carrito</button>`;
                                    
            seccionCarrito.append(cajaProducto);
        }
    }
})

//CODIGO DEL CARRITO 

let buyButton = document.querySelector(".boton-comprar")
let navbarCartCount = document.getElementById("navbar__cart--count")


