// Returnerer resultatet og avslutter funksjonen

/**
 * Adderer to tall og returnerer resultatet.
 * 
 * @param {number} a - Det første tallet.
 * @param {number} b - Det andre tallet.
 * @returns {number} Resultatet av addisjonen.
 */
function adderTall(a, b) {
    // Sjekk om a og b er tall
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Både a og b må være tall');
    }
  
    // Adder a og b
    const resultat = a + b;
  
    // Returnér resultatet
    return resultat;
  }
  try {
    const resultat = adderTall(5, 7);
    console.log(`Resultatet er: ${resultat}`);
  } catch (error) {
    console.error(error.message);
  }

/**
 * Sjekker om to parametere er tekst og skriver ut en melding til konsollen.
 * 
 * @param {string} param1 - Første parameter.
 * @param {string} param2 - Andre parameter.
 */
function sjekkTekst(param1, param2) {
    // Sjekk om param1 og param2 er tekst
    if (typeof param1 === 'string' && typeof param2 === 'string') {
      console.log(`Utskrift til konsoll: ${param1} og ${param2}`);
    } else {
      console.error('Error: Jeg skriver bare ut tekst!');
    }
  }
sjekkTekst('Hei', 'Verden'); // Skriver ut "Utskrift til konsoll: Hei og Verden"
sjekkTekst(123, 'Verden'); // Skriver ut "Error: Jeg skriver bare ut tekst!"

/**
 * Utfører en regneoperasjon basert på de tre parameterne.
 * 
 * @param {number} tall1 - Første tall.
 * @param {number} tall2 - Andre tall.
 * @param {string} operatør - Operatør for regneoperasjonen (+,-,*,/).
 */
function utførRegneoperasjon(tall1, tall2, operatør) {
    // Sjekk om tall1 og tall2 er tall
    if (typeof tall1 !== 'number' && typeof tall2 !== 'number') {
      console.error(`${tall1} og ${tall2} er ikke tall! Programmet terminerer!`);
      return;
    } else if (typeof tall1 !== 'number') {
      console.error(`${tall1} er ikke et tall! Kan ikke utføre ${operatør}. Programmet terminerer!`);
      return;
    } else if (typeof tall2 !== 'number') {
      console.error(`${tall2} er ikke et tall! Kan ikke utføre ${operatør}. Programmet terminerer!`);
      return;
    }
  
    // Sjekk om operatør er en av de fire grunnleggende regneartene
    if (!['+', '-', '*', '/'].includes(operatør)) {
      console.error(`${operatør} er ikke en gyldig operasjon. Programmet terminerer!`);
      return;
    }
  
    // Utfør regneoperasjonen
    let resultat;
    switch (operatør) {
      case '+':
        resultat = tall1 + tall2;
        break;
      case '-':
        resultat = tall1 - tall2;
        break;
      case '*':
        resultat = tall1 * tall2;
        break;
      case '/':
        resultat = tall1 / tall2;
        break;
    }
  
    // Skriv ut resultatet
    console.log(`Info: ${tall1} ${operatør} ${tall2} = ${resultat}`);
  }

  utførRegneoperasjon(5, 7, '+'); // Skriver ut "Info: 5 + 7 = 12"
  utførRegneoperasjon(10, 3, '-'); // Skriver ut "Info: 10 - 3 = 7"
  utførRegneoperasjon(4, 9, '*'); // Skriver ut "Info: 4 * 9 = 36"
  utførRegneoperasjon(12, 4, '/'); // Skriver ut "Info: 12 / 4 = 3"
  
  utførRegneoperasjon('a', 7, '+'); // Skriver ut "a er ikke et tall! Kan ikke utføre +. Programmet terminerer!"
  utførRegneoperasjon(5, 'b', '+'); // Skriver ut "b er ikke et tall! Kan ikke utføre +. Programmet terminerer!"
  utførRegneoperasjon('a', 'b', '+'); // Skriver ut "a og b er ikke tall! Programmet terminerer!"
  utførRegneoperasjon(5, 7, '%'); // Skriver ut "% er ikke en gyldig operasjon. Programmet terminerer!"