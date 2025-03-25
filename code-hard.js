//Vypracování kasík:

// 1) Funkce co přijme arrayInput (pole string hodnot), tento input musí zůstat nezměněn, dále funkce dostane minLength (počet znaků), maxLength (počet znaků) a symbolToFill (nemusí být vyplněn, pokud nebude použije se znak 'X', bez uvozovek),
// funkce vrátí pole string hodnot kde každá má délku maxLength, které vychází z arrayInput a bude obsahovat pouze stringy s délkou v rozmezí minLength (včetně) až maxLength (včetně), delší nebo kratší budou přeskočeny, ty co byly v rozmezí budou doplněny pomocí symbolToFill na délku maxLength,
// v případě prázdného nebo nedefinovaného arrayInput a nebo pokud požadavkům na délku nepdovídají žádné hodnoty, tak bude vráceno prázdné pole
function processArrayItems(arrayInput, minLength, maxLength, symbolToFill = 'X') {
  // Pokud není arrayInput nebo je prázdné, vrátíme prázdné pole
  if (!arrayInput || arrayInput.length === 0) {
    return [];
  }

  // Filtrace a zpracování každého prvku pole
  return arrayInput.filter(item => {
    const itemLength = item.length;
    return itemLength >= minLength && itemLength <= maxLength;
  }).map(item => {
    const itemLength = item.length;
    // Pokud délka není maximální, doplníme symbolem
    if (itemLength < maxLength) {
      const padding = maxLength - itemLength;
      return item + symbolToFill.repeat(padding);
    }
    return item;
  });
}

// oblast volání funkcí
const fruits = ["apple", "banana", "kiwi", "orange", "strawberry"];

// 1)
const result1 = processArrayItems(fruits, 5, 6);
console.log(result1);  // ["appleX", "banana", "orange"]

// do kódu níže nezasahujte
module.exports = {
  variant: "2A",
  processArrayItems,
};
