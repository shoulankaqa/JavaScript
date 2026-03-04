// №1
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
const negativeArr = (arr) => {
    let count = 0
    for (let res of arr) {
        if (res < 0) {
            count++
        }

    }
    return count

}

// const negativeArr = (arr) => arr.filter(n => n < 0).length; // SASHKA

// console.log(negativeArr([1, -2, -3, -4, 5]))
// console.log(negativeArr([1, 2, 3, 4, 5]))

// №2
// Дан массив с числами. Оставьте в нем только положительные числа.
const positiveArr = (arr) => {
    return arr.filter(num => num > 0)
}

// const positiveArr = (arr)=> arr.filter(num => num > 0); // SASHKA

// console.log(positiveArr([1, 2,-3,-4]));
// console.log(positiveArr([-5, 6,-7,8]));
// console.log(positiveArr([-1,-2,-3,-4]));


// №3
// Дана строка. Удалите предпоследний символ из этой строки.
const delSymbol = (str) => {
    const penultimate = str.length - 2 //нашли предпоследний символ
    return str.slice(0, penultimate) + str.slice(-1)
}
// const delSymbol = (str) => str.replace(str.charAt(str.length - 2), ""); // SASHKA


// console.log(delSymbol("Строка"))
// console.log(delSymbol("абвг"))


// №4
// Дан некоторый массив, например, вот такой:
//     [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

// const sumElements = (arr) => {
//     let middle = Math.floor(arr.length / 2) // поделили пополам
//     let firstElem = arr.slice(0, middle) // нашли первую половину
//     let lastElem = arr.slice(middle, arr.length)
//     return (firstElem.reduce((a, b) => a + b, 0) / lastElem.reduce((a, b) => a + b, 0)).toFixed(1);
// }
//
// console.log(sumElements([1, 2, 3, 4, 5, 6]))
// console.log(sumElements([1, 2, 3, 4, 5,]))
// console.log(sumElements([]))