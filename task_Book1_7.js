// №1
// Дана строка:
// 'abcde'
// Получите массив букв этой строки.

//  const str = "abcde"
//  const arr = str.split("")
//  console.log(arr);


// №2
// Дано некоторое число:
// 12345
// Получите массив цифр этого числа.

// let num = 12345
// num = String(num).split("").map(Number)
//     console.log(num);
    


// №3
// Дано некоторое число:
// 12345
// Переверните его:
// 54321

    // let num = 12345
    // let rev = ""
    // num = String(num)
    // let i = num.length -1
    // while(i >= 0){
    //     rev+= num[i]
    //     i -- 
    // }
    // console.log(Number(rev));
        
    //ИЛИ
// const rev = (num) => Number((num.toString().split("").reverse().join("")))
// console.log(rev(12345));



// №4
// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.

// const num = 12345
// let sum = 0
// const mas = num.toString().split('')

// for(let i = 0; i < mas.length; i++){
//     sum = sum + Number(mas[i])
// }
// console.log(sum);
