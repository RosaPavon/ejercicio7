
let nom=parseInt(window.prompt("Cuántos grados hace en tu ciudad?"))
let grados=(window.prompt("Escribe C si quieres los grados en centígrados y F si los quieres en fahrenheit"))
let cent= parseInt(((nom-32)*5)/9)
let faar= parseInt(((nom*9)/5)+32)

switch(grados){

    case "C":    
    document.getElementById("resultado").innerHTML=`
    <h1>Los grados centígrados de hoy son de ${cent}</h1>
    `
    break
    case "F":
        document.getElementById("resultado").innerHTML=`
        <h1>Los grados fahrenheit de hoy son de ${faar}</h1>
        `
    break
    default:
        document.getElementById("resultado").innerHTML=`
        <h1>Introduce un valor válido</h1>
        `
    


}

