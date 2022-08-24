


 //Età Viaggio-----------------------------------------------------------
 const Chilometri = prompt('Quanti chilometri devi percorrere?');
 const Km = parseInt(Chilometri);


 const AnnoNascita = prompt('Quando sei nato?');
 const Anni = parseInt(AnnoNascita);
 console.log('Anni', Anni);
 const anni = 2022 - Anni;
 const risposta2 = `la tua età è ${anni}`;

 if  ( isNaN(Anni)) { 
    // blocco di istruzioni 1
    document.getElementById('Età').innerHTML = 'non hai inserito un numero';
  } else { 
      // blocco di istruzioni 2
      document.getElementById('Età').innerHTML= risposta2;
  }
  

 
 console.log('Km', Km);
 const risposta = `Devi percorrere  ${Km}`;

 const costo = Km * 0.21
 const soldi = `Costo Biglietto  ${costo}`;


//  Variabile Minorenne


let Min = anni < 18;
const Mino = costo * 0.8
const Sconto1 = `Prezzo scontato per Minorenni  ${Mino}`;

let Mag = anni > 65;
const Maggi = costo * 0.6
const Sconto2 = `Prezzo scontato per Maggiorenni  ${Maggi}`;





 if  ( isNaN(Km)) { 
   // blocco di istruzioni 1
   document.getElementById('Chilometri').innerHTML = 'non hai inserito un numero';
} else 

     // blocco di istruzioni 2
     document.getElementById('Chilometri').innerHTML= risposta;
     document.getElementById('Costo').innerHTML= soldi;
     document.getElementById('Costo-Scontato1').innerHTML= Sconto1;
     document.getElementById('Costo-Scontato2').innerHTML= Sconto2;


     

     









// Età-----------------------------------------------------------










// Viaggio-----------------------------------------------------------------------


    






