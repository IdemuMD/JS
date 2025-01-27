//opppgave 1
let vardi;

function sjekkStreng(vardi) {
  if (typeof vardi === 'string') {
    console.log('STRING STRING STRING!');
  } else {
    console.log('Dette er ikke en String i det hele tatt');
  }
}

// Test funksjonen med følgende verdier
vardi = 1;
sjekkStreng(vardi);
// Resultat: Dette er ikke en String i det hele tatt

vardi = '1';
sjekkStreng(vardi);
// Resultat: STRING STRING STRING!

vardi = 'Navn';
sjekkStreng(vardi);
// Resultat: STRING STRING STRING!

//oppgave 2
// Deklarér og initialisér to variabler
let variabel1;
let variabel2;

// Definer en funksjon som sjekker om to variabler er av samme type
function sjekkType(variabel1, variabel2) {
  // If-statement som sjekker om variablene er av samme type
  if (typeof variabel1 === typeof variabel2) {
    // Hvis variablene er av samme type, skriv ut følgende melding
    console.log('Variablene du brukte er av samme type!');
  } else {
    // Hvis variablene ikke er av samme type, skriv ut følgende melding
    console.log('Variablene du brukte er IKKE av samme type!');
  }
}

// Test funksjonen med følgende verdier
// a) 'en', 1
variabel1 = 'en';
variabel2 = 1;
sjekkType(variabel1, variabel2);
// Resultat: Variablene du brukte er IKKE av samme type!

// b) 1, 1
variabel1 = 1;
variabel2 = 1;
sjekkType(variabel1, variabel2);
// Resultat: Variablene du brukte er av samme type!

// c) 2, 3
variabel1 = 2;
variabel2 = 3;
sjekkType(variabel1, variabel2);
// Resultat: Variablene du brukte er av samme type!

// d) '2', '3'
variabel1 = '2';
variabel2 = '3';
sjekkType(variabel1, variabel2);
// Resultat: Variablene du brukte er av samme type!

// e) 2, '3'
variabel1 = 2;
variabel2 = '3';
sjekkType(variabel1, variabel2);
// Resultat: Variablene du brukte er IKKE av samme type!

//oppgave3a
// Deklarér og initialisér en variabel
let variabel;

// Test funksjonen med følgende verdier
variabel = 10;
if (typeof variabel === 'number') {
  console.log('Dette er et tall!');
} else {
  console.log('Test failed');
}

variabel = 'hei';
if (typeof variabel === 'number') {
  console.log('Dette er et tall!');
} else {
  console.log('Test failed');
}

//oppgave3b
// Deklarér og initialisér to variabler
let verdi1;
let verdi2;

// Test funksjonen med følgende verdier
verdi1 = 10;
verdi2 = 20;
if (typeof verdi1 === 'number' && typeof verdi2 === 'number') {
  if (verdi1 > 5 || verdi2 > 5) {
    if (verdi1 > 5) {
      console.log(`Jeg fant en variabel som var større enn fem! Den hadde verdien: ${variabel1}`);
    }
    if (verdi2 > 5) {
      console.log(`Jeg fant en variabel som var større enn fem! Den hadde verdien: ${variabel2}`);
    }
  } else {
    console.log('Ingen av variablene var større enn fem');
  }
} else {
  if (typeof verdi1 !== 'number') {
    console.log(`Variabelene er ikke av typen number, den er av typen: ${typeof variabel1}`);
  }
  if (typeof verdi2 !== 'number') {
    console.log(`Variabelene er ikke av typen number, den er av typen: ${typeof variabel2}`);
  }
}

verdi1 = 10;
verdi2 = 'hei';
if (typeof verdi1 === 'number' && typeof verdi2 === 'number') {
  if (verdi1 > 5 || verdi2 > 5) {
    if (verdi1 > 5) {
      console.log(`Jeg fant en variabel som var større enn fem! Den hadde verdien: ${variabel1}`);
    }
    if (verdi2 > 5) {
      console.log(`Jeg fant en variabel som var større enn fem! Den hadde verdien: ${variabel2}`);
    }
  } else {
    console.log('Ingen av variablene var større enn fem');
  }
} else {
  if (typeof verdi1 !== 'number') {
    console.log(`Variabelene er ikke av typen number, den er av typen: ${typeof variabel1}`);
  }
  if (typeof verdi2 !== 'number') {
    console.log(`Variabelene er ikke av typen number, den er av typen: ${typeof variabel2}`);
  }
}