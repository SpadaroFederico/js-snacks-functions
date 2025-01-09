/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const nomi = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function campionaIniziali(nomeArray) {
    return nomeArray.map(nome => nome.charAt(0));
}

// Invoca la funzione qui e stampa il risultato in console
console.log(campionaIniziali(nomi));

// Risultato atteso: ["A", "L", "M", "A", "G", "A"]
