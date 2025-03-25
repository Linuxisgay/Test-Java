//Vypracování kasík:

// oblast definice funkcí

// 1) Funkce co vrací string, který odpovídá slovu (jsou oddělena mezerou) ze stringInput na pozici dané wordIndex (od 1), pokud index není vyplněn pracuje se s prvním slovem, vrácené slovo bude pouze malými písmeny, pokud slovo na dané pozici neexistuje, vrátí se prázdný string
// například pro "My Cat Is Yellow?" a 3 bude výsledek "is"
function lowercaseWord(stringInput, wordIndex = 1) {
  const words = stringInput.split(' ');  // Rozdělí text na jednotlivá slova
  if (wordIndex < 1 || wordIndex > words.length) {
    return '';  // Pokud index není platný, vracíme prázdný řetězec
  }
  return words[wordIndex - 1].toLowerCase();  // Vrátí požadované slovo malými písmeny
}


// 2) Funkce co přijme testScore, a vrátí odpovídající známku podle následující tabulky:
// 0-64 -> F, 65-78 -> E, 79-86 -> D, 87-92 -> C, 93-98 -> B, 99-100 -> A, pokud je testScore mimo rozsah 0-100, nebo nevalidní hodnota funkce vrátí "INVALID SCORE"
// například pro 75 bude výsledek "E"
function transformScoreToGrade(testScore) {
  if (isNaN(testScore) || testScore < 0 || testScore > 100) {
    return "INVALID SCORE";  // Kontrola nevalidních hodnot
  }
  if (testScore >= 99) return "A";
  if (testScore >= 93) return "B";
  if (testScore >= 87) return "C";
  if (testScore >= 79) return "D";
  if (testScore >= 65) return "E";
  return "F";  // Pokud je skóre mezi 0-64
}


// 3) Funkce na výpočet factorialu, pomocí cyklu, vstupem je factorialNumber, výstupem bude výsledek faktoriálu
// nevalidní vstupem je záporné číslo, nebo nečíslo, v takovém případě funkce vrátí undefined
// faktoriál je součin všech kladných celých čísel menších nebo rovných zadanému číslu; pozor faktoriál čísla 0 je 1
// například pro 5 bude výsledek 120; vzorec: 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(factorialNumber) {
  if (isNaN(factorialNumber) || factorialNumber < 0) {
    return undefined;  // Pokud vstup není platné číslo nebo je záporné
  }
  let result = 1;
  for (let i = 1; i <= factorialNumber; i++) {
    result *= i;  // Vypočítá faktoriál pomocí cyklu
  }
  return result;
}


// oblast volání funkcí

// 1)
const result1 = lowercaseWord("My Cat Is Yellow?", 3);
console.log(result1);

// 2)
const result2 = transformScoreToGrade(75);
console.log(result2);

// 3)
const result3 = factorial(5);
console.log(result3);

// do kódu níže nezasahujte

module.exports = {
  variant: "2A",
  lowercaseWord,
  transformScoreToGrade,
  factorial,
};
