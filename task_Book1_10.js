// // №1
// // Заполните массив случайными числами из промежутка от 1 до 100.

// const arr = []

// for(let i = 0; i < 5; i++){
//     arr.push(Math.floor(Math.random() * 100) + 1)
// }

// console.log(arr);


// №2
// Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.

// let num = 12345
// num = (String(num).split('').map(Number))
// num = num.reverse()
// console.log(num);



// №3
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

// const funcConsoleArray = (arr) => {
//     let size = 2

//     for (let i = 0; i < arr.length; i +=size){
//         console.log(arr.slice(i, i + size));
//     }
// }

// funcConsoleArray([1, 2, 3, 4, 5, 6]);


// №4
// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

// const unionArray = (arr1, arr2) => {

//     return arr1.concat(arr2)
// }

// console.log(unionArray([1, 2, 3], [4, 5, 6]));
