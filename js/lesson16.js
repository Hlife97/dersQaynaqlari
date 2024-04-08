// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5];

// console.log(arr1 == arr2)

// const massiv = Array();
// const massiv2 = [];

// console.log(massiv)
// console.log(massiv2)

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 123, true, {}];


// const js = 'JavaScript';


// console.log(js.split(''));

// console.log(countries)

// countries[1] = 'Turkiye';

// console.log(countries)

// const massiv = Array(5).fill('X'); // method ile yaradilan

// const massiv2 = []; // kvadrat moterize ile yaradilan array

// console.log(massiv)

// massiv[0] = 'BMW';

// console.log(massiv)

// const firstList = [1, 2, 3];
// const secondList = [4, 5, 6];

// const res = secondList.concat(firstList);

// console.log(firstList)
// console.log(secondList)

// console.log(res);

// const elovset = [1, 2, 3, 4, 5, 6];

// console.log('uzunluq: ', elovset.length)

// console.log(elovset.indexOf(4));


// const a = prompt('Dili daxil edin.').toUpperCase();

// if (languages.indexOf(a) == -1) {
//     console.log(`${a} dili bizde tedris olunmur`);
// } else {
//     console.log(`${a} dili bizde tedris olunur...`);
// }

// if (languages.includes(a)) {
//     console.log(`${a} dili bizde tedris olunur...`);
// } else {
//     console.log(`${a} dili bizde tedris olunmur`);
// }

// console.log(Array.isArray(languages));

// console.log(languages.toString());

// console.log(languages.join('  ++++  '));

// console.log(languages.splice(1))

// const languages = ['GE', 'AZ', 'TR', 'EN', 'US'];

// console.log(languages.join('%'))

// languages.push('RU');
// languages.push('KZ');

// console.log(languages);

// languages.pop();
// languages.pop();

// languages.shift();
// languages.shift();

// languages.unshift('AZ');
// languages.unshift('GE');

// console.log(languages);

// console.log(languages.reverse());

// console.log(languages)

// console.log(languages.sort().reverse());


// console.log(languages[0])
// console.log(languages[1])
// console.log(languages[2])
// console.log(languages[3])
// console.log(languages[4])

// let number1 = 5;

// console.log(++number1)

// const languages = ['GE', 'AZ', 'TR', 'EN', 'US'];

// for (let i = languages.length-1; i >= 0; i--) {
//     console.log(languages[i]);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [];

// let numbers2 = [2, 4, 6, 8, 10, 12, 14];

// Birinci arrayda olan deyiskenlerin ikiye vurulmus halini basqa bir arraya elave edin.

// for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i] * 2);
//     arr2.push(numbers[i] * 2);
// }

// console.log(arr2)


// Cut olan reqemleri basqa bir arrayda nece saxlamaq olar.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         // console.log(numbers[i]);
//         evenNumbers.push(numbers[i]);
//     }
// }

// console.log(evenNumbers)

// let arr = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         arr.push(numbers[i] * 2);
//     }
// }

// console.log(arr)

// While loop


// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// let i = 10;

// while (i <= numbers.length - 1) {
//     console.log(numbers[i]);
//     i++;
// }

// let i = 10;

// do {
//     console.log(numbers[i])
//     i++;
// } while (i < numbers.length);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenNumbers = [];

// for (const n of numbers) {
//     if (n == 4 || n == 5) {
//         continue;
//     }
//     evenNumbers.push(n * 2);
// }

// console.log(evenNumbers)

let mixArray = [2, 'HTML', 'CSS', 'JS', 12, 4, 5, 6, 'PHP', true, false, 'Bootstrap', 90];

//! String olan deyiskenleri str arrayinda 
//! vede number olan deyiskenleri ise nums arrayinde saxlayin

const str = [];
const nums = [];
const other = [];

for (let i = 0; i < mixArray.length; i++) {
    if (typeof mixArray[i] == 'string') {
        str.push(mixArray[i]);
    } else if (typeof mixArray[i] == 'number') {
        nums.push(mixArray[i]);
    } else {
        other.push(mixArray[i]);
    }
}

console.log(str)
console.log(nums)
console.log(other)