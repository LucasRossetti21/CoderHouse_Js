let monto = document.querySelector(".monto")
let cartel = document.querySelector(".cartel")

function enviar(){
    
    if(monto.value >= 10000){
        cartel.innerHTML = `<p>El monto de: ${monto.value} es valido</p>
        <p>Tasa de interes: 60%</p>
        <p>El monto total seria: ${monto.value * 1.60}</p>`
    }

    else{
        cartel.innerHTML = "El monto es menor a 10000"
    }
}