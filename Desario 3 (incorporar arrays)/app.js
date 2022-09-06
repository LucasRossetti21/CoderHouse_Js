let contenedor = document.querySelector(".contenedor")
let inputComentario = document.querySelector(".input-comentario")
let sendButton = document.querySelector(".send-button")
let cajaComentarios = document.querySelector(".caja-comentarios")

let COMENTARIOS = []

sendButton.addEventListener("click", ()=> {
    function Comentario(comentario){
        this.comentario = comentario;
    }

    let comentario = inputComentario.value;

    let nuevoComentario = new Comentario(comentario);

    function agregar(){
        COMENTARIOS.push(nuevoComentario);
        let coment = document.createElement("div")
        coment.classList.add("coment")
        cajaComentarios.appendChild(coment)
        coment.insertAdjacentHTML("afterbegin", nuevoComentario.comentario)
    }

    agregar()
    console.log(COMENTARIOS)
})

window.alert("Desafio arrays por: LUCAS ROSSETTI")



