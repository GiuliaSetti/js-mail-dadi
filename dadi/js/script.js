// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

/* 
- Il giocatore tira il dadp.

- Il computer tira il dado.

? SE il numero dell'utente è maggiore di quello del computer:
    ° Complimenti, hai vinto!

: ALTRIMENTI SE il numero dell'utente è minore di quello del computer:
    ° Mi spiace, hai perso, ritenta!

: ALTRIMENTI 
    ° pareggio

*/


let button = document.getElementById("play_button");


document.getElementById("dice_container").style.display = "none";


button.addEventListener("click", function(){

    let userShot = Math.floor((Math.random() * 6) + 1);

    // test
    console.log(userShot);

    let computerShot = Math.floor((Math.random() * 6) + 1);

    // test
    console.log(computerShot);

    document.getElementById("your_shot_result").innerHTML = userShot;

    
    document.getElementById("cpu_shot_result").innerHTML = computerShot;



    // aggiunta immagini

    
    document.getElementById("dice_container").style.display = "block";


    let diceImages = [
        "img/1.png",
        "img/2.png",
        "img/3.png",
        "img/4.png",
        "img/5.png",
        "img/6.png",
    ]

    let diceImgOne = document.getElementById("dado_1");

    let diceImgTwo = document.getElementById("dado_2");
 
    diceImgOne.src = diceImages[userShot-1];

    diceImgTwo.src = diceImages[computerShot - 1];

    ////___

    if(userShot > computerShot){

        console.log("Hai vinto!");

        document.getElementById("result").innerHTML = "Hai vinto!"


    } else if (userShot < computerShot){

        console.log("Hai perso");

        
        document.getElementById("result").innerHTML = "Hai perso! Riprova!"

    } else {

        console.log("Pareggio!");

          
        document.getElementById("result").innerHTML = "Pareggio!"

    }


})








