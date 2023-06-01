/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function area (l1,l2){
    let arearettagolo= l1*l2
    console.log(arearettagolo)
    
}
 area (5,6);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum (n1,n2) {
    let somma=n1+n2
    console.log(n1+n2)
    return somma

}
let somma1= crazySum(5,7)
let somma2= crazySum(2,2)
let somma3= somma2*=3
console.log(somma3)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff (number5){             
let differenza =number5-19
if(number5<=19){
    differenza=Math.abs(number5-19) }
    else{
        differenza=Math.abs(number5-19)*3
    }
    return differenza
 }

 let l=crazyDiff(5)
 console.log(l)
 let b=crazyDiff(20)
console.log(b)
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary (n){
if(n>=20 && n<=100|| n===400 ){
    return true
}
}
 

let x=boundary(25)
console.log(x)
let y=boundary(400)
console.log(y)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let stringa='questo è il corso'


    function epify (newstringa) {
          if(stringa==='questo è il corso'){
        newstringa=stringa.replace('questo','EPICODE')
         }else if(stringa==='EPICODE CIAO'){
            
            console.log('questo è il corso')
         }
         return newstringa
       
    
    
}
let t=epify();
console.log(t)


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numero10){
   
    if(numero10 % 3===0){
        console.log('è multiplo di 3')
    }else if (numero10 % 7===0){
        console.log('è multiplo di 7')
    } else {
        console.log('non è multiplo di 3 ne di 7')
    }
       
    
        
    
}

check3and7(5)
check3and7(9)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* SCRIVI QUI LA TUA RISPOSTA */



function reverseString (nstring){
    let newstring = " "

    for (let i = nstring.length - 1; i >= 0; i--){
        newstring=newstring+nstring.charAt(i)
    }
  
console.log(newstring)

}
reverseString('epicode')
    
  
        

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst (string){
    
    

}

upperFirst()


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutstring(string){
    let stringa11= 'ciao'
   let newstring=' '
     newstring=stringa11.slice(1)
    console.log(newstring)
    

}

cutstring()


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
