/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraLettra(nomeArray, letter) {
    return nomeArray.filter(nome => nome.startsWith(letter));
}

// Invoca la funzione qui e stampa il risultato in console
const result = filtraLettra(names, "A");
console.log(result);

// Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]