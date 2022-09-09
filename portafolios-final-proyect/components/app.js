let cajaComentarios = document.querySelector(".comentarios")
let buttonComentario = document.getElementById("button")
let inputComentario = document.querySelector(".input-comentario")

let COMENTARIOS = []

buttonComentario.addEventListener('click', ()=> {
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

//--------------------------RELOJ DIGITAL-----------------------------------

function displayTime(){
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    function displayTime(){
        let dateTime = new Date();
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();
    
        if(hours < 10){
            document.querySelector('.hours').innerHTML = `<p>0${hours}:</p>`;
        }else{ document.querySelector('.hours').innerHTML = `<p>${hours}:</p>`;}
       
        if(minutes < 10){
            document.querySelector('.minutes').innerHTML = `<p>0${minutes}:</p>`;
        }else{ document.querySelector('.minutes').innerHTML = `<p>${minutes}:</p>`;}
        
        if(seconds < 10){
            document.querySelector('.seconds').innerHTML = `<p>0${seconds}</p>`;
        }else{ document.querySelector('.seconds').innerHTML = `<p>${seconds}</p>`;}
    }
    
    setInterval(displayTime)    
}

setInterval(displayTime)