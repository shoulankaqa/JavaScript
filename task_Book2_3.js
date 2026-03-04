// №1
// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
//
// const lettersMatch = (a, b) => {
//     if (!a || !b) return false
//     return a.slice(-1).toLowerCase() === b[0].toLowerCase();
// }
//
// console.log(lettersMatch("Кот", "ток"))
// console.log(lettersMatch("машина", "апельсин"))
// console.log(lettersMatch("Компьютер", "яблоко"))

// №2
// Дана некоторая строка. Найдите позицию третьего нуля в строке.
//
//     const positionThirdZero = (str) => {
//     if (typeof str !== "string") return "Введена не строка"
//         let count = 0
//         for (let i = 0; i < str.length; i++ ) {
//             if (str[i] === "0") {
//                 count++;
//
//                 if (count === 3) {
//                     return i
//                 }
//
//             }
//         }
//
//     return "В строке нет третьего нуля"
//
//     }
//
// console.log(positionThirdZero("qwe0dg0vg0djb"));
// console.log(positionThirdZero("hg0asd"));
// console.log(positionThirdZero(""));

// // №3
// // Даны числа, разделенные запятыми:
// //     '12,34,56'
// // Найдите сумму этих чисел.
//
// const sumNumbers = (num) => {
//     let arr = num.split(",").map(Number)
//     return sum = arr.reduce((a, b) => a + b, 0)
// }
//
// console.log(sumNumbers("12,34,56"))

// №4
// Дана дата в следующем формате:
//     '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
//     year: '2025',
//         month: '12',
//     day: '31',
// }

//     const objDate = (date) => {
//     let [year, month, day ] = date.split('-')
//         return obj = {year: year, month: month, day:day}
//     }
//
// console.log(objDate('2025-12-31'));