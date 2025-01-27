function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  console.log(convertToCelsius(100)); // 37.78

function calculateAge(fodselsar, nuvarerendeAr) {
  return nuvarerendeAr - fodselsar;
}

console.log(calculateAge(1990, 2022)); // 32

function calculate(tall1, tall2, operator) {
  if (operator === "+") {
    return tall1 + tall2;
  } else if (operator === "-") {
    return tall1 - tall2;
  } else {
    return "Ugyldig operator";
  }
}

console.log(calculate(5, 3, "+")); // 8
console.log(calculate(5, 3, "-")); // 2

function isEven(tall) {
  return tall % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(11)); // false

function findMax(tall1, tall2) {
  if (tall1 > tall2) {
    return tall1;
  } else if (tall2 > tall1) {
    return tall2;
  } else {
    return "Tallene er like";
  }
}

console.log(findMax(10, 20)); // 20
console.log(findMax(20, 10)); // 20
console.log(findMax(10, 10)); // "Tallene er like"

function calculateTax(inntekt) {
  if (inntekt < 50000) {
    return inntekt * 0.1;
  } else if (inntekt >= 50000 && inntekt <= 100000) {
    return inntekt * 0.2;
  } else {
    return inntekt * 0.3;
  }
}

console.log(calculateTax(40000)); // 4000
console.log(calculateTax(60000)); // 12000
console.log(calculateTax(120000)); // 36000

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("testexample.com")); // false

function findLongestString(streng1, streng2) {
  if (streng1.length > streng2.length) {
    return streng1;
  } else if (streng2.length > streng1.length) {
    return streng2;
  } else {
    return "Strengene er like lange";
  }
}

console.log(findLongestString("hei", "heia")); // "heia"
console.log(findLongestString("hei", "hei")); // "Strengene er like lange"

function calculateDiscount(pris, rabatt) {
  return pris - (pris * rabatt / 100);
}

console.log(calculateDiscount(100, 10)); // 90
console.log(calculateDiscount(200, 25)); // 150

function isStrongPassword(passord) {
  return passord.length >= 8 && /\d/.test(passord);
}

console.log(isStrongPassword("abc123")); // false
console.log(isStrongPassword("password1")); // true