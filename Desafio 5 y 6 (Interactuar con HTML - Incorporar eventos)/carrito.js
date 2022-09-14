let buyButton = document.getElementById("buy-button")
let navbarCartCount = document.getElementById("navbar__cart--count")

buyButton.addEventListener("click", ()=> {
    let cuenta = i++;
    navbarCartCount.classList.add("opacity-uno")
    navbarCartCount.innerHTML = cuenta
})