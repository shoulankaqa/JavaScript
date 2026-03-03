// №1
// Найдите сумму всех целых чисел от 1 до 100.
    // let sum = 0
    // for (let i = 1; i <= 100; i++){
    //     sum = sum + i 
    // }
    //   console.log(sum);


// // №2
// // Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

//     let sum = 0
//     for (let i = 0; i <= 100; i++){
//         if(i % 2 === 0 ){
//             sum += i
//         }
//     }
//     console.log(sum);
    


// №3
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

    // let sum = 0
    // for (let i = 1; i <= 100; i += 2){
    //     sum += i
    // }
    // console.log(sum);
    



// №4
// Даны два целых числа. Найдите остаток от деления первого числа на второе.

// const remainderDevision = (num1, num2) => {

//     if (!Number.isFinite(num1) || !Number.isFinite(num2)){
//         return "Введены не числа"
//     }

//     if (num2 === 0){
//         return "Делить на ноль нельзя"
//     }

//     return num1 % num2


// }
// console.log(remainderDevision(15, 5));
// console.log(remainderDevision(19, 3));
// console.log(remainderDevision("", 8));
// console.log(remainderDevision(7,0));



// №5
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

    // const getSymbol = (str) => {
    //     let i = str.trim().length - 1
    //     let reversed = ""
    //     while (i >= 0){
    //         reversed += str[i];
    //         i --
    //     }
    //     return reversed
    // }
    //  console.log(getSymbol(" кот"));
    //  console.log(getSymbol("нос"));
    //  console.log(getSymbol("апельсин "));
