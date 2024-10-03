/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

/*pre-fase: STRUMENTI
-- array
-- variabili 
-- .random 
-- if, else if, else
--.floor
--.random
*/

//fase1: PREPARAZIONE //fase2: RACCOLTA DATI
// creazione della variabile
// aggiungo match.random per i numeri casuali 
// aggiungo match.floor per far in modo che i numeri siano interi e non con la virgola
const giocatore = Math.floor(Math.random() * 7);
const computer = Math.floor(Math.random() * 7);

//fase3: ELABORAZIONE DEI DATI 
// se il giocatore ha il numero più alto
if(giocatore > computer){
// stampa messaggio
    console.log('il vincitore è l utente')
// stampa il numero del giocatore 
    console.log(giocatore)
// se il computer ha il numero più alto
}else if(giocatore < computer){
// stampa il messaggio
    console.log('il vincitore è il computer');
// stampa il numero del computer
    console.log(computer);
// altrimenti in caso i due numeri siano uguali
}else{
// stampa il messaggio
    console.log('pareggio')
}



