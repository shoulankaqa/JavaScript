// №1
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

// const negativeNum = (n) => {

//     if (n > 0) return "Число положительное"
//     if (n < 0) return "Число отрицательное"
//         return "Число равно нулю"
// }

// console.log(negativeNum(-1));
// console.log(negativeNum(100));
// console.log(negativeNum(0));




// №2
// Дана строка. Выведите в консоль длину этой строки.

// const getLength = (str) => {
//     return str.length
// }

// console.log(getLenght("Апельсин"));
// console.log(getLenght("Кошка"));
// console.log(getLenght(""));




// №3
// Дана строка. Выведите в консоль последний символ строки.

// const lastSUmbol = (str) => {

//     return !str ? "Строка пустая" : str.slice(-1)
// }

// console.log(lastSUmbol("Кот"))
// console.log(lastSUmbol("Автомобиль"))
// console.log(lastSUmbol(""))




// №4
// Дано число. Проверьте, четное оно или нет.

// const evenNum = (n) => {
//     return n % 2 === 0 ? "Число чётное" : "Число нечётное"
// }

// console.log(evenNum(1));
// console.log(evenNum(-10));
// console.log(evenNum(0));




// №5
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const firstLet = (str1, str2) => {

//     if (!str1 || !str2) {
//         return "Одна из строк пустая"
//     }

//     return str1[0].toLowerCase() === str2[0].toLowerCase() 
//     ? "Первые буквы совпадают" : "Первые буквы не совпадают"

// }
// console.log(firstLet("Кошка", "кот"));
// console.log(firstLet("яблоко", "апельсин"));
// console.log(firstLet("", "мышь"));
