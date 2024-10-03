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

// fase 1: PREPARAZIONE
let mail;

// fase 2:RACCOLTA DATI
let list = [
    'antonio@gmail.com',
    'luigi@gmail.com',
    'andrea@hotmail.com'
];
mail = prompt('inserisci la tu mail:');
console.log(mail);
    