// let name = 'Elovset'; // Primitive data type

// name[0] = 'A';
// // console.log(name)

// // Object - Non primitive data type
// // key: value
// let person = {
//     name: 'John',
//     surname: 'Doe',
//     age: 25,
//     address: 'Baku'
// }

// person.name = 'Kamil';

// // console.log(person)

// // Dot notation, 
// // console.log(person.address);

// // Arrays
// let info = ['English', 'Turkish', 'Azerbaijan', 25, true, undefined, null, [1, 2, 3, 4], { name: 'Fazil' }];

// info[0] = 'German';
// // console.log(info)

// // index 0 dan baslayir. Arraylarda valuenin yerini gosterir.

// // console.log(info[8])


// let num1 = 5;
// let num2 = 5;

// // == beraberdir mi?  === hem beraber olub olmadigini hemde type'ni yoxlayacaq
// // console.log(num1 === num2);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// // console.log(arr1 == arr2)

// // Math Object

// const person2 = {
//     name: 'Person2',
//     age: 23
// }

// // console.log(person2.age)

// // console.log(Math.E)

// const PISAYISI = Math.PI;

// // console.log(Math);

// // console.log(Math.round(Math.E));
// // console.log(Math.ceil(3.23))
// // console.log(Math.floor(3.73))

// // console.log(Math.min(23, 4, 56, -7, 88));
// // console.log(Math.max(23, 4, 56, -7, 88));


// // 0 - 9.9999999

// // let randomNumber = Math.floor(Math.random() * 3);

// let randomNumber = Math.random(); // 0 -1 arasi reqem verir = 0.1231231 - 0.9123423423
// let randomNumberZeroToTen = randomNumber * 11; // 0.0000001 - 10.99999;
// let roundingRandomNumber = Math.floor(randomNumberZeroToTen); // 0 - 10

// // console.log(randomNumber);
// // console.log(randomNumberZeroToTen);
// // console.log(roundingRandomNumber);

// const colors = ['red', 'green', 'purple']

// // console.log(colors[randomNumber])

// // console.log(randomNumber)

// let space = ' ';
// let firstName = 'Fazil';
// let lastName = 'Memmedli';
// let age = 28;
// let birlesmisCumle = firstName + space + lastName;

// let result = 'Menim adim' + space + firstName + "'dir" + space + "soyadim ise" + space + lastName + space + "yasim ise " + age;

// // console.log(result);

// const pr = "asdjhsakdjashjkdhsa asdjasldjad asldksadl asj \
// asdjnsajdas \
// asdklsajdsajk \
// asdlaskdl; asdk; aslkdl; aksd; lak";

// // console.log(pr)

// // console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?')

// // console.log('Days\tTopics\tExercises\tas')

// // console.log('This is a backslash  symbol (\\)') // To write a backslash

// // console.log(`Salam ${firstName}`)

// console.log('Adin uzunluqu: ' + firstName.length);

// let deyisken = 'Lorem ipsum Dolar sit ame fa';

// let lastIndex = deyisken.length - 1;

// // console.log(lastIndex);
// // console.log(deyisken[lastIndex]);

// // console.log(deyisken.toUpperCase())
// // console.log(deyisken.toLowerCase())

// // console.log(deyisken[10]);

// let js = 'JavaScript is the best beautiful language';


// let slicedString = js.substr(4, 6);
// let best = js.substr(18, 4);

// let best2Version = js.substring(18, 22);

// // console.log(slicedString)

// // console.log(best)
// // console.log(best2Version)

// // let string = '30 Days Of JavaScript';

// // let stringArray = string.split(' ');

// // console.log(stringArray)

// // console.log(string.split(''));

// let string = '30 Days Of JavaScript   ';

// // let stringToLowercase = string.toLowerCase();
// // let searchedVariable = 'Of'.toLowerCase();


// // console.log(stringToLowercase.includes(searchedVariable));


// console.log(string.trim().toUpperCase().includes('of'.toUpperCase()));

// console.log(string.toLowerCase().replace('JAVascript'.toLowerCase(), 'C#'))


// // console.log(string.charCodeAt(3))

// console.log(string.indexOf('Ka'));

// let string2 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// console.log(string2.lastIndexOf('love'));

// let deyisken2 = 'Python'

// let concatedString = deyisken2.concat('is', 'the', 'best', 'programming', 'language')

// console.log(concatedString)


// let x = 5;
// let y = '9.78';

// let result2 = x + +(y);

// console.log(result2);
// // ?

const name = 55;

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

arr1[0] = 99;

console.log(arr1)

let x = 5;
let y = 5;

console.log(x == y);

console.log(arr1 == arr2)
