let monto = document.querySelector(".monto")
let cartel = document.querySelector(".cartel")

function enviar(){
    
    if(monto.value >= 10000){
        cartel.innerHTML = `<p>El monto de: ${monto.value} es valido</p>
        <p>Tasa de interes: 60%</p>
        <p class="verde">Monto total a pagar: ${monto.value * 1.60}</p>`
    }

    else{
        cartel.innerHTML = `<p class="rojo">El monto es menor a 10000</p>`
    }
}

function bienvenido(){
    window.alert("Bienvenido al desafio N° 1 :D")
}

bienvenido()