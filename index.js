'use strict';

let arr = [9, 0, 11, 5, -9, 25, 100, 2]
function validateArray(arg) {
    if (!Array.isArray(arg)) throw new Error('The argument is not an array');
    else if (arg.length === 0) throw new Error('An array is empty');
    else if (!arg.every( value => typeof value === 'number' && isFinite(value))) throw new Error ('At least one argument of an array is not a finite number');
}

// 1. Функции сортировки массива по возрастанию и убыванию
function sortArrayAsc(arg) {
    validateArray(arg);
    return arg.slice().sort((a, b) => a - b);
}
console.log(sortArrayAsc(arr));

function sortArrayDesc(arg) {
    validateArray(arg);
    return arg.slice().sort((a, b) => b - a);
}
console.log(sortArrayDesc(arr));


// 2. Функции поиска минимального и максимального элементов массива
function getMaxOfArray(arg) {
    validateArray(arg);
    return Math.max(...arg); 
}
console.log(getMaxOfArray(arr));

function getMinOfArray(arg) {
    validateArray(arg);
    return Math.min(...arg); 
}
console.log(getMinOfArray(arr));


// 3. Функция проверки палиндрома
function isPalindrome (word) {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('')
}
console.log(isPalindrome('eye'));


// 4. FizzBuzz
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);
    }
}
fizzBuzz(100);


// 5. Функция, которая проверяет, являются ли 2 строки анаграммами (без учета регистра)
function checkAnagram(string_1, string_2) {
    string_1 = string_1.replace(/[^\w]/g, '').toLowerCase();
    string_2 = string_2.replace(/[^\w]/g, '').toLowerCase();
    if(string_1.length !== string_2.length) {
        return false;
    } else {
        return sortString(string_1) === sortString(string_2)
    }
}
function sortString(string) {
    return string.split('').sort().join('');
}
console.log(checkAnagram('e ye.', 'Ye&e'));


// 6. Поиск гласных
function findVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++
        }
    }
    return count;
}
console.log(findVowels('JavaScript'));


// 7. Перевернуть числовой массив, не используя reverse
function reverseArray(arg) {
    let result = [];
    while(arg.length) {
        result.push(arg.pop());
    }
    return result;
}
console.log(reverseArray([1, 2, 3, 4]));


// 8. Найти среднее арифметическое элементов массива
function averageOfArray(arg) {
    let sum = 0;
    for(let j = 0; j < arg.length; j++) {
        sum += arg[j];
    }
    return sum / arg.length;
}
console.log(averageOfArray(arr));


// 9. Функция поиска элемента в массиве
function inArray(str, array) {
   return array.includes(str); 
}
console.log(inArray('hi', ['hello', 'good morning']));


// 10. Преобразовать строку "123456" в "214365"
function replaceCharts(str = '123456') {
    let arrFromStr = str.split('');
    for(let k = 0; k < arrFromStr.length; k += 2) {
        [arrFromStr[k], arrFromStr[k + 1]] = [arrFromStr[k + 1], arrFromStr[k]];
    }
    return arrFromStr.join('');
}
console.log(replaceCharts());


// 11. Определить, в какую декаду месяца попадает число от 1 до 31
let day = 20;
switch (true) {
    case day >= 1 && day <= 10:
        console.log('first decade');
        break;
    case day >= 11 && day <= 20:
        console.log('second decade');
        break;
    case day >= 21 && day <= 30:
        console.log('third decade');
        break;
    default:
        console.log('31 day of the month');
}


// 12. Определить, в какую пору года попадает месяц
let month = 1;
switch (true) {
    case month == 12 || month >= 1 && month < 3:
        console.log(`It's winter`);
        break;
    case month >= 3 && month <= 5:
        console.log(`It's spring`);
        break;
    case month >= 6 && month <= 8:
        console.log(`It's summer`);
        break;
    case month >= 9 && month <= 11:
        console.log(`It's autumn`);
        break;
}


// 13. Развернуть массив, создав новый массив, не используя reverse
function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}


// 14. Развернуть массив на месте, не используя reverse
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}


// 15. Фибонначи поиск числа в последовательности
function fibonacci(n) {
    let sq5 = Math.sqrt(5); 
    let a = (1 + sq5) / 2;
    let b = (1 - sq5) / 2;
    return Math.ceil((Math.pow(a, n) - Math.pow(b, n)) / sq);
}


function fibonacci2(num) {
  let a = 1, b = 1;
  for (let i = 3; i <= num; i++) {
      [a,b] = [b,a + b];
  }
  return b;
}

  
// 16. Глубокая копия объекта
const deepClone = obj => {
    if (obj === null || typeof obj !== 'object') return obj;
    
    let clone = Object.assign({}, obj);
  
    Object.keys(clone).forEach(
        key => (clone[key] = typeof obj[key] === 'object' ? 
        deepClone(obj[key]) : obj[key])
    );
  
    return Array.isArray(obj) && obj.length ?
        Array.from(clone) && (clone.length = obj.length) :
        Array.isArray (obj) ? Array.from(obj) : clone;
}