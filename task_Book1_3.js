// №1
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// const getSymbol = (str) => {

//     if (typeof str !== "string"){
//         return "Введена не строка"
//     }
//     return str.length > 1 ? str[str.length - 2] : "Строка менее или равна одному символу"

// }

// console.log(getSumbol("Строка"));
// console.log(getSumbol("Кот"));
// console.log(getSumbol(""));
// console.log(getSumbol(12));


// №2
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе

// const isDivisible = (num1, num2) => {

//     if (!Number.isFinite(num1) || !Number.isFinite(num2) || num2 === 0) {
//         return false
//     }

//     return num1 % num2 === 0

// }

// console.log(isDivisible(15, 3));
// console.log(isDivisible(-21, 7));
// console.log(isDivisible(7, 2));
// console.log(isDivisible(22, 0));
// console.log(isDivisible("", 8));