precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let sumar = document.querySelector("#sumar")
let restar = document.querySelector("#restar")

sumar.addEventListener ("click", ()=>{
    let cantidad = document.querySelector (".cantidad")
    let valor = cantidad.innerHTML
    cantidad.innerHTML = parseInt(valor) + 1
    let total = document.querySelector(".valor-total")
    total.innerHTML = parseInt (cantidad.innerHTML) * precio
})

restar.addEventListener ("click", ()=>{
    let cantidad = document.querySelector (".cantidad")
    let valor = cantidad.innerHTML
    cantidad.innerHTML = parseInt(valor) - 1
    let total = document.querySelector(".valor-total")
    total.innerHTML = parseInt (cantidad.innerHTML) * precio
})