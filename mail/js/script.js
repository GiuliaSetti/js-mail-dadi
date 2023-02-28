// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


/* 

- creo una array con email di fantasia (totale 6);

- chiedo all'user di inserire la mail nel campo input;

al click del bottone:

- creo una variabile false, (che sia vera solo se la mail corrisponde al valore di un qualsiasi indice dell'array).

- genero un ciclo che controlli che la mail dell'user corrisponda a una di quelle dell'array: controlla quindi che la variabile di accesso sia vera solo se la mail corrisponde al valore di un qualsiasi indice dell'array.

? SE la mail corrisponde a una delle mail dell'array:
    ° Benvenuto!
:ALTRIMENTI se la mail non corrisponde:
    ° Mi spiace, prova con un'altra mail.

*/



// bottone

let button = document.getElementById("login_button");


 
let user = document.getElementById("user_mail");


// lista accounts
let accounts = [
"mariobianchi@gmail.com", 
"marcorossi@gmail.com", 
"saraverdi@gmail.com", 
"elenagialli@gmail.com",
"lisaviola@gmail.com",
"matteoblu@gmail.com"
]

// test array accounts

console.log(accounts);



// al click del bottone
button.addEventListener("click", function(){

   


    // test email
    console.log(user);

    // variabile per conferma
    let userAccess = false;


    // ciclo
    for(let i = 0; i < accounts.length; i ++){


        if (user == accounts[i]){

            userAccess = true;

            // test

            console.log("Benevenuto");

        }

    }

    if (userAccess == true){


        document.getElementById("login").innerHTML = "Benvenuto!";


    }  else {

        
        
        document.getElementById("login").innerHTML = "Mi spiace, prova con un'altra mail..";


    }



});









