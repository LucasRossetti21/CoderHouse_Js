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
        seccionProductos.innerHTML = ""
        renderizarProductos()
    }
    
    else if(resultadoBusqueda == false){
        seccionProductos.classList.add("flex-center")
        seccionProductos.innerHTML = "<p>No se encontraron resultados</p>";
    }
})