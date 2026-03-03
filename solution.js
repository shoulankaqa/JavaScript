import {getTriangleArea} from './myMathModule.js';
import square from './square.js'

// Импортируйте функцию getTriangleArea() из модуля myMathModule.
// Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n^(2)/2. Используйте функцию square() (принимает число и возвращает его квадрат).
// Экспортируйте созданную функцию по умолчанию.

const squareFunc = (n) => {
    return getTriangleArea(n, square(n)/2)
}

export default () => {
  squareFunc
}

console.log(squareFunc(10));
console.log(squareFunc(12));
console.log(squareFunc(14));
