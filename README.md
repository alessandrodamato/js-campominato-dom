Griglia Campo Minato
===
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.  
Ogni cella ha un numero progressivo, da 1 a 100.  
Ci saranno quindi 10 caselle per ognuna delle 10 righe.  
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.  

**Bonus**  
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:  
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;  
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;  
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;  

## Svolgimento
1. Iniziare a creare una griglia statica in HTML e CSS che contenga 100 quadrati
2. Creare un reset dell'HTML in JS 
3. Rendere la griglia dinamica stampando i vari quadrati tramite ciclo for, assegnando loro i numeri dell'indice progressivo
4. Al click del quadrato specifico (this) si aggiungera ad esso una classe che lo colori azzurro e un log dell'indice relativo

#### Bonus
1. Creare una select con 3 difficoltà diverse
2. Per ognuna di esse impostare dinamicamente il numero di quadrati e la misura di essi
