// oblast definice funkcí

// 1) Funkce co vrací boolean hodnotu zda arrayInput, obsahuje v sobě stringToFind
function contains(arrayInput, stringToFind) {}

// 2) Funkce co vrací délku string řetězce poskytnutého ve stringInput
function size(stringInput) {}

// 3) Funkce co vrací bool hodnotu co je AND mezi booleanInput1 a booleanInput2
function andMe(booleanInput1, booleanInput2) {}

// 4) Funkce co spojí (bez žádného přidaného znaku) dva textové řetězce string1 a string2 a vrátí je jako jeden string
// například pro "Hello", "World" bude výsledek "HelloWorld"
function join(string1, string2) {}

// 5) Funkce co vrací hodnotu z pole arrayInput na indexu indexInput (od 0)
// například pro ["apple", "banana", "kiwi", "orange", "strawberry"], 2 bude výsledek "kiwi"
function get(arrayInput, indexInput) {}

// oblast volání funkcí
const fruits = ["apple", "banana", "kiwi", "orange", "strawberry"];

// 1)
const result1 = contains(fruits, "banana");
console.log(result1);

// 2)
const result2 = size("I love learning!");
console.log(result2);

// 3)
const result3 = andMe(true, false);
console.log(result3);

// 4)
const result4 = join("Hello", "World");
console.log(result4);

// 5)
const result5 = get(fruits, 2);
console.log(result5);

// do kódu níže nezasahujte

module.exports = {
  variant: "2A",
  contains,
  size,
  andMe,
  join,
  get,
};
