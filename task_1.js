// Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

// Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

const makeItFunny = (text, n) => {
    const res = [];
    const parts = text.match(new RegExp(`.{1,${n}}`, 'g'));
    parts.forEach((el, i) => {
        res.push(el.slice(0, n - 1) + el.charAt(n - 1).toUpperCase())
    });
    return res.join("");
}

console.log(makeItFunny("I never look back", 2)); // 'I NevEr LooK bAck'