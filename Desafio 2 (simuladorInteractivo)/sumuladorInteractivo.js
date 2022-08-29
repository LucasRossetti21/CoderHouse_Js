let input = document.querySelector(".input")
let button = document.querySelector(".button")
let cuotaUno = 5439
let cuotaDos = 4953
let respuesta = document.querySelector(".respuesta")

let totalCuotas = cuotaUno + cuotaDos
let interes = (totalCuotas*13) / 100;

console.log(interes)

let montoTotal = totalCuotas + interes
console.log(montoTotal)

button.addEventListener("click", ()=> {
    let montoIngresado = input.value
    if(montoIngresado >= montoTotal){
        respuesta.innerHTML = `<p style="color: green">El monto total de: ${montoTotal} fue abonado con exito!</p>`
    } else{
        function faltante(){
            let dineroFaltante = montoTotal - montoIngresado
            respuesta.innerHTML = `<p style="color: green">El pago de ${montoIngresado} se realizo con exito.</p>
                                <p style="color: orange">recuerde que aun debe: ${dineroFaltante}`
        }
        faltante()
    }

})





