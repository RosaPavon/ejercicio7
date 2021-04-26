

let nombre=window.prompt("Escribe tu nombre")
let precio=parseInt(window.prompt("¿Cuánto has vendido este mes?"))
let porcentaje= precio*1.05

if(precio>=500){
document.getElementById("nombre").innerHTML=`
<h1>Hola,${nombre} este mes has ganado ${porcentaje}</h1>

`
}
else{
    document.getElementById("nombre").innerHTML=`
<h1>Hola,${nombre} este mes has ganado ${precio}</h1>

`

}




