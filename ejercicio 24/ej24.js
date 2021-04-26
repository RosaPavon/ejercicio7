
let num1= parseInt(window.prompt("Escribe un número entre de 3 dígitos"))
let dig1= parseInt((num1%1000/10))
let dig2= parseInt((num1%100/10))
let dig3= parseInt(num1%10)

let par1= dig1%2==0
let par2= dig2%2==0
let par3= dig3%2==0

let ipar1= dig1%2!=0
let ipar2= dig2%2!=0
let ipar3= dig3%2!=0

if(par1 && par2 && par3){
    document.getElementById("resultado").innerHTML=`
<h1>Todos lo número son pares</h1>

`
}
else if(ipar1 && ipar2 && ipar3){
    document.getElementById("resultado").innerHTML=`
<h1>Todos lo número son impares</h1>

`
}
else {
    document.getElementById("resultado").innerHTML=`
    <h1>El número tiene cifras pares e impares</h1>
    
    `
    

}




