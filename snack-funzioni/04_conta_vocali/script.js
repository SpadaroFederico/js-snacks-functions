/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countvocali(word) {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    const VocaliTrovate = word.split('').filter(lettera => vocali.includes(lettera.toLowerCase()));
    return {
        count: VocaliTrovate.length,
        vocali: VocaliTrovate
    };
}

// Invoca la funzione qui e stampa il risultato in console
const result = countvocali(word);
console.log(`Numero di vocali: ${result.count}`);
console.log(`Vocali trovate: ${result.vocali.join(', ')}`);

// Risultato atteso se si passa 'javascript': 3 (a, a, i)
