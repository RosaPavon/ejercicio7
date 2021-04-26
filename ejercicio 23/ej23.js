
let num=parseInt(window.prompt("Escribe una fecha"))
let num1=(num%4==0)
let num2=(num%100==0)
let num3=(num%400==0)



if(num1){
    document.getElementById("bisiesto").innerHTML=`
    <h1>El año ${num} es bisiesto</h1>
    `
}

else if(num2){
    document.getElementById("bisiesto").innerHTML=`
    <h1>El año ${num} no es bisiesto</h1>
    `
    if(num3){
        document.getElementById("bisiesto").innerHTML=`
        <h1>El año ${num} es bisiesto</h1>
        `
  
    }

}
else{
    document.getElementById("bisiesto").innerHTML=`
    <h1>El año ${num} no es bisiesto</h1>
    `

}




