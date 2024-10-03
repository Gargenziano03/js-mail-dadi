/*Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
*/

/* pre-fase: individua gli strumenti 
-- let 
-- prompt
-- array 
-- if, else if, else
*/


//EXSERCISE: MAIL 

// fase 1: PREPARAZIONE
// variabile mail
let mail;

// fase 2: RACCOLTA DATI
// arrey contenete l'email degli utenti
let list = [
    'antonio@gmail.com',
    'luigi@gmail.com',
    'andrea@hotmail.com'
];
// richiesta al utenye di inserire una mail
mail = prompt('inserisci la tu mail:');
// stampa mail in console
console.log(mail);

//fase 3: ELABORAZIONE DATI
// controlla se nella list è presenta la mail inserita
if(list.includes(mail)){
// se è presente stampa accesso consentiti
    alert('accesso consentito');
    console.log('accesso consentito');
// altrimenti stampa accesso negato
}else{
    alert('accesso negato');
    console.log('accesso negato');
}

    