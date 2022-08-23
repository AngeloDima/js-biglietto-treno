



// Chilometri
{
const text = prompt('chilometri che vuole percorrere');
const textAsNumber = parseInt(text);
console.log('textAsNumber', textAsNumber);

const chilometri =  0.31 - textAsNumber;




const risposta = `chilometri da percorrere ${chilometri}`;

if  ( isNaN(textAsNumber)) { 
    // blocco di istruzioni 1
    document.getElementById('Chilometri').innerHTML = 'non hai inserito un numero';
  } else 
      // blocco di istruzioni 2
      document.getElementById('Chilometri').innerHTML= risposta;
}








// Età
{
const text = prompt('Quando sei nato?');
const textAsNumber = parseInt(text);
console.log('textAsNumber', textAsNumber);
const anni = 2022 - textAsNumber;

const risposta = `la tua età è ${anni}`;

if  ( isNaN(textAsNumber)) { 
  // blocco di istruzioni 1
  document.getElementById('Età').innerHTML = 'non hai inserito un numero';
} else 
    // blocco di istruzioni 2
    document.getElementById('Età').innerHTML= risposta;
}


