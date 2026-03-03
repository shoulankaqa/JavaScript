export const sumNum = (n: number): number | string => {
    const str = Math.abs(n).toString()
    let res;
    if (n < 0) {
        res = -Number(str[0]) + Number(str[str.length - 1]);
    } else res = Number(str[0]) + Number(str[str.length - 1])
    
    return typeof n !== "number" ? `Введено не число: '${n}'` : res;
}

console.log(sumNum(626));
console.log(sumNum(91));
console.log(sumNum(-5321));
console.log(sumNum(""));
console.log(sumNum("Слово"));