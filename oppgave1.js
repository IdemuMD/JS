console.log("Hello World")
//console sier at det som kommer senere skal være i consollen til programmet man bruker
//Log sier at det skal være vist i det øyeblikket koden blir kjørt.
//("") sier at her skal det være tekst hvis vi ikke inkluderer "" vil den kunne bare skrive ut tall
//En parameter er en variabel i funksjonens definisjon, mens et argument er den faktiske verdien som sendes til funksjonen når den kalles. Parametere er plassholdere for argumentene som blir brukt i funksjonen.
function skrivUt(parameter) {
    console.log(parameter);
}

skrivUt("Min parameter er ");
skrivUt("Et annet argument");

function skrivUt(param1, param2) {
    console.log("Jeg fikk to parametere; " + param1 + " og " + param2);
}

skrivUt("Første parameter", "Andre parameter");