// №1 Дана некоторая строка. Найдите позицию первого нуля в строке.

// const getIndexInStr = (str) => {
//     for(let i = 0; i < str.length; i++){
//         if(Number(str[i]) === 0){
//             return i
//         }

//     }
//     return null
// }

// console.log(getIndexInStr("ertw6wew0"));
// console.log(getIndexInStr("27480fd"));
// console.log(getIndexInStr("e0sdw"));


// №2
// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.


// №3
// Дан массив. Удалите из него элементы с заданным значением.

// const delElem = (arr, del) => {
//     let res = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== del){
//             res.push(arr[i])
//         }

//     }
//     return res
// }

// console.log(delElem([1, 2, 5, 3, 4, 5 ], 5));

//ИЛИ

// const delElem = (arr, del) => {
//     return arr.filter(element => element !== del)
// }
// console.log(delElem([1, 2, 5, 3, 4, 5 ], 5));


// №4
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

const sumFirstHalf = (arr) => {
    const middle = Math.floor(arr.length / 2);
    return arr.slice(0, middle).reduce((a, b) => a + b);
}

console.log(sumFirstHalf([1, 2, 3, 4, 5, 6]));
console.log(sumFirstHalf([1, 2, 3, 4, 5]));
