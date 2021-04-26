
let bob= window.prompt("Habla con BOB");

if(
    bob.substring(bob.lenght - 2)=== "!?" ||     
    bob.substring(bob.lenght - 2)=== "?!")
    {
        window.alert("Eh! Tranquilizate. Yo se lo que hago");
    }
else if (bob.substring(bob.lenght -1)=== "?"){
        window.alert("Claro!");
  
    }
else if (bob.substring(bob.lenght -1)=== "!"){
        window.alert("Eh! Tranquilizate!");
  
    }    
else if (bob.substring(bob.lenght=== 0)){
        window.alert("Vale con que esas tenemos...");
  
    }
else{
        window.alert("“Sin más.”");
  
    }







