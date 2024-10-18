/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20 // Dichiaro di una variabile 'sum' che contiene la somma di 10 e 20.
console.log ("il risultato è ", sum) // Utilizzo console.log per stampare "il risultato è " seguito dal valore di 'sum'.

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21); // Genero un numero casuale intero tra 0 e 20 (incluso) e lo stampo in console.
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Antonio",
  surname: "Giannattasio",
  age: 28,
}
console.log(me) // Creo un oggetto 'me' con le proprietà 'name', 'surname' e 'age', e lo stampo in console.

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age; // Rimuovo la proprietà 'age' dall'oggetto 'me' e stampo l'oggetto aggiornato in console.
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["determinato", "intraprendente", "solare"] // Aggiungo la proprietà 'skills' all'oggetto 'me' e assegna un array di abilità, quindi stampo l'oggetto in console.
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push ("simpatico"); // Aggiungo la stringa "simpatico" all'array 'skills' dell'oggetto 'me' utilizzando il metodo push, quindi stampo l'array aggiornato in console.
console.log(me.skills)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop("simpatico"); // Rimuovo l'ultimo elemento dall'array 'skills' dell'oggetto 'me' utilizzando il metodo pop, quindi stampo l'array aggiornato in console.
console.log(me.skills)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return (Math.random() * 6); // Genero un numero casuale compreso tra 0 e 6 
}

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1; // Controllo se 'num1' è maggiore di 'num2', se true, restituisce 'num1' altrimenti restituisce "num2"
  } else {
    return num2;
  }
}

console.log(whoIsBigger(55, 795)); 



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) {
  return str.split(" "); // Utilizzo il metodo 'split' per dividere la stringa in un array usando uno spazio come delimitatore
}


console.log(splitMe("Finalmente domani è sabato"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, quartoesercizio) {
  if (quartoesercizio) { // Verifico se 'quartoesercizio' è true, se è true, restituisce la stringa senza il primo carattere usando il metodo 'slice'
    return str.slice(1); // Se è false, restituisce la stringa senza l'ultimo carattere usando il metodo 'slice'
  } else {
    return str.slice(0, -1); 
  }
}

console.log(deleteOne("Ciaone", true));  
console.log(deleteOne("Benvenuto", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(str) {
  
  return str.replace(/[0-9]/g, ''); }//'g' è un modificatore che indica che la sostituzione deve avvenire in tutta la stringa (ho cercato su google)
console.log(onlyLetters("Adios123")); 
console.log(onlyLetters("128cscs8548sacf"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(email) {
  
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //questa funzione verifica che l'email contenga:
  // Una o più lettere, numeri o caratteri speciali validi prima della '@'
  // Una parte di dominio con lettere e numeri seguita da un punto (.)
  // Un dominio di alto livello che deve contenere almeno due lettere

  return emailPattern.test(email);
}
console.log(isThisAnEmail("giangian@gmail.com"));
console.log(isThisAnEmail("sdsdw")); 

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  return days[new Date().getDay()]; // Utilizzo il metodo 'getDay()'  e 'date' per ottenere il numero del giorno della settimana corrente (0 per Domenica, 6 per Sabato)
}


console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().


  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(num) {
  const values = []; 

  
  for (let i = 0; i < num; i++) { // Ciclo che esegue i lanci di dado 'num' volte
    const roll = dice(); // Lancia il dado e salva il risultato in 'roll'
    values.push(roll); 
  }

  
  let sum = 0;  // Inizializzo una variabile per la somma di tutti i valori
  values.forEach(value => {
    sum = sum + value; // Aggiungo ogni valore alla variabile 'sum'
  });

  return { // Restituisce un oggetto contenente sia la somma totale che l'array dei valori ottenuti
    sum: sum,
    values: values
  };
}


const result = rollTheDices(15); 
console.log(result);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(birthDate) {
  
  const today = '2024-10-18'; // Definisco la data odierna in formato 'YYYY-MM-DD'
  
  
  return today.slice(5) === birthDate.slice(5); // Utilizza il metodo 'slice(5)' per ottenere il mese e il giorno sia dalla data di oggi che dalla data di nascita
}


const myBirthday = '1996-07-20'; 
const isBirthdayToday = isTodayMyBirthday(myBirthday);
console.log(isBirthdayToday);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainer() {
  const container = document.getElementById("container"); // Utilizzo 'document.getElementById' per ottenere l'elemento con l'id specificato
  return container; 
}
const myContainer = selectContainer();
console.log(myContainer);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAllTableCells() {
  const tableCells = document.querySelectorAll("td"); // Utilizzo 'document.querySelectorAll' per ottenere tutti gli elementi <td>
  return tableCells; 
}

const cells = selectAllTableCells();
console.log(cells); 

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTableCellContents() {
  const tableCells = document.querySelectorAll("td"); 
  
  
  tableCells.forEach((cell) => { // Itero ciascuna cella utilizzando il  forEach
      console.log(cell.textContent); 
  });
}
printTableCellContents(); 

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedBackgroundToLinks() {
  const links = document.querySelectorAll("a"); // Seleziono tutti gli elementi <a> (link) presenti nel documento
  
  
  links.forEach((link) => { // Itero ciascuna cella utilizzando il  forEach
      link.style.backgroundColor = "red"; // Imposto il colore di sfondo del link su rosso
      link.style.color = "white"; // Imposto il colore del testo del link su bianco
  });
}
addRedBackgroundToLinks();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addNewItemToList(itemText) { // Questa funzione aggiunge un nuovo elemento alla lista non ordinata con id "myList"
  
  const myList = document.getElementById("myList");

  
  const newItem = document.createElement("li");  // Creo un nuovo elemento <li> da aggiungere alla lista

  
  newItem.textContent = itemText;

 
  myList.appendChild(newItem);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function clearList() {
  const myList = document.getElementById("myList"); // Seleziono l'elemento della lista non ordinata dal DOM utilizzando il suo id
  myList.innerHTML = ""; // Imposto il contenuto HTML dell'elemento 'myList' come vuoto, rimuovendo tutti gli elementi
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToRows() {
   
  const rows = document.querySelectorAll("tr");
  
  
  rows.forEach(row => { // Itero su ogni riga (row) selezionata
      row.classList.add("test"); // Aggiungo la classe "test" all'elemento <tr> corrente
  });
}

addClassToRows();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/function halfTree(height) {
  for (let i = 1; i <= height; i++) { // Itero da 1 fino all'altezza specificata
    
    console.log('*'.repeat(i)); // Stampo una riga di asterischi, ripetendoli 'i' volte
}
}
 halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(height) {
  for (let i = 1; i <= height; i++) { // Itero da 1 fino all'altezza specificata
    // Stampo direttamente la riga combinando spazi e asterischi
    console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
  }
}
// Chiama la funzione 'tree' con un'altezza di 27
tree(27);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

//ES 12
function newestMovie(movies) {
    

  let latest = movies[0]; 

  movies.forEach(movie => { // Ciclo su ciascun film nell'array 'movies'
      if (Number(movie.Year) > Number(latest.Year)) {  // Converto l'anno del film corrente e dell'ultimo film confrontato in numeri
        // Se l'anno del film corrente è maggiore, tramite forEach vienne aggiornato il valore 'latest' con il film corrente
          latest = movie; 
      }
  });

  return latest; 
}

const recentMovie = newestMovie(movies);
console.log(recentMovie);

//ES 13
function countMovies(movies) {
  return movies.length; 
}



const movieCount = countMovies(movies);
console.log(movieCount);

//ES 14
function onlyTheYears(movies) {
  return movies.map(movie => movie.Year); // Utilizzo il metodo 'map' per creare un nuovo array contenente solo gli anni ('Year') di ogni film

}

const years = onlyTheYears(movies);
console.log(years); 

//ES 15
function onlyInLastMillennium(movies) {
  const result = []; 
  for (let i = 0; i < movies.length; i++) {
      
      if ( movies[i].Year <= 2000) { // Se l'anno di uscita del film è minore o uguale al 2000, aggiungo il film all'array 'result'
          result.push(movies[i]); 
      }
  }
  return result; 
}


const lastMillenniumMovies = onlyInLastMillennium(movies);
console.log(lastMillenniumMovies); 

//ES 16
function sumAllTheYears() {
  let total = 0; 
  
  
  for (let i = 0; i < movies.length; i++) {
      
      total += Number(movies[i].Year);  // Converto l'anno (che è una stringa) in un numero e lo somma al totale
  }
  
  return total; 
}


const totalYears = sumAllTheYears();
console.log(totalYears);

//ES 17
function searchByTitle(searchString) {
  return movies.filter(movie => movie.Title.includes(searchString)); // Utilizzo il metodo 'filter' per creare un nuovo array con i film il cui titolo include la stringa di ricerca
}


const foundMovies = searchByTitle('Rings');
console.log(foundMovies);

//ES18
function searchAndDivide(searchString) {
  const result = {
      match: movies.filter(movie => movie.Title.includes(searchString)),  // 'match' contiene i film il cui titolo include la stringa di ricerca
      unmatch: movies.filter(movie => !movie.Title.includes(searchString)), // 'unmatch' contiene i film il cui titolo NON include la stringa di ricerca
  };
  return result;
}

const searchResult = searchAndDivide('Lord');
console.log(searchResult);

//ES19
function removeIndex(index) {
  const newMovies = [...movies]; 
  newMovies.splice(index, 1); // Utilizzo il metodo 'splice' per rimuovere l'elemento all'indice specificato
  // 'splice' modifica l'array rimuovendo 1 elemento a partire dall'indice indicato
  return newMovies; 
}

const updatedMovies = removeIndex(2); //chiama la funzione 'removeIndex' per rimuovere il film all'indice 2
console.log(updatedMovies);