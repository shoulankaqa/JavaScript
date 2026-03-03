// №1
// Дано число. Выведите в консоль первую цифру этого числа.

// const getFirstNum = (n) => {

//     const str = Math.abs(n).toString()
//     let result

//     if (n < 0) {
//         result = -(Number(str[0]))
//     } else {
//         result = Number(str[0])
//     }
//     return typeof n !== "number" ? "Введено не число" : result

// }
// console.log(getFirstNum(123));
// console.log(getFirstNum(674));
// console.log(getFirstNum(-985));
// console.log(getFirstNum(""));
// console.log(getFirstNum("Слово"));




// №2
// Дано число. Выведите в консоль последнюю цифру этого числа.

// const lastNumber = (n) => {

//     if (typeof n !== "number") {
//         return "Введено не число"
//     }

//     const str = Math.abs(n).toString()
//     return Number(str[str.length - 1])
// }

// console.log(lastNumber(123));
// console.log(lastNumber(674));
// console.log(lastNumber(-985));
// console.log(lastNumber(""));
// console.log(lastNumber("Слово"));




// №3
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// const sumNum = (n) => {
//     const str = Math.abs(n).toString()
//     let res;
//     if (n < 0) {
//         res = -(Number(str[0])) + Number(str[str.length - 1]);
//     } else res = Number(str[0]) + Number(str[str.length - 1])
    
//     return typeof n !== "number" ? "Введено не число" : res;
// }

// console.log(sumNum(626));
// console.log(sumNum(91));
// console.log(sumNum(-5321));
// console.log(sumNum(""));
// console.log(sumNum("Слово"));


// №4
// Дано число. Выведите количество цифр в этом числе.

// const getCount = (n) => {
//     return Number.isFinite(n) ? Math.abs(n).toString().length : 0;
// }   

// console.log(getCount(12345));
// console.log(getCount(78));
// console.log(getCount(-219));
// console.log(getCount(""));
// console.log(getCount("Слово"));




// №5
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// const getCoincidence = (num1, num2) => {
//     if (!Number.isFinite(num1) || !Number.isFinite(num2)) return "Введено не число"

//     const str1 = Math.abs(num1).toString()
//     const str2 = Math.abs(num2).toString()

//     return (str1[0]) === (str2[0]) ? "Первые цифры совпадают" : "Первые цифры не совпадают"
// }

// console.log(getCoincidence(123, 1946));
// console.log(getCoincidence(93145, 64));
// console.log(getCoincidence(-32, 39));
// console.log(getCoincidence("", 613));
