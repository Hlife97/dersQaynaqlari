const person = {
    name: "John",
    age: 25
}

// console.log(person['name']);

const arr = [1, 2, 3, 4, 5];

const lastIndex = arr.length - 1;

// console.log(arr[2]);

let str = "30 Days of JavaScript.!"; // bu string tipindedir.

// console.log(str.split(''));

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

let number = -23; // true
let num2 = 0; // false

let str2 = "lorem ipsum"; // true
let str3 = ''; // false
let isOk = true; // true

let x = null; // false
let y; // false
let isOK2 = false; // false


let a = 3;
let b = 2;

a += b; // a = a + b;

// console.log(a % b)

// a % 2 == 0;

//! == deyeri yoxlayir. yeni bu iki deyer bir birine beraberdir mi? SADECE DEYER!
//! === deyeri ve eyni zamanda tipi yoxlayir. yeni bu iki deyer bir birine beraberdir mi!

let c = 4; // tipi number
let d = '4'; // tipi string

// console.log(c === d);

// console.log(c >= d);


// console.log(4 > 2 && 9 < 7 && (5 > 2 || 30 > 4));

// let count = 1;
// count += 5; // count = count + 5;

// console.log();

// let passport = true;

// passport
//     ?
//     console.log('Kece bilersiz')
//     :
//     console.log('Kece bilmersiz')

// const obj = {
//     key: ' value'
// }

// console.log(window)

// window.alert('Silmek istediyinize emin siniz?');

// alert('Silmek istediyinize emin siniz?');

// prompt('Bir reqem daxil edin.');

// let birthYear = prompt('Dogum ilinizi daxil edin.');

// console.log(birthYear);

// let res = 2024 - birthYear;

// console.log(Number(birthYear) + 2);

// console.log('Sizin yasiniz: ', res);

// confirm('Are you sure you want to delete?');

// console.log(Date())

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// months[0]
let now = new Date();

let year = now.getFullYear(); // 2024
let monthIndex = now.getMonth();

// console.log(year)
// console.log(month)

// console.log(months[monthIndex]);

// let k = 12;

// if (k > 10 && k < 20) {
//     console.log('10 dan boyuk 20 den kicik')
// } else if (k > 20 && k < 30) {
//     console.log('20 - 30 arasidir')
// } else if (k > 30 && k < 50) {
//     console.log('20 - 50 arasi')
// } else {
//     console.log('k bilinmir')
// }

// 1- Userden deyer al;

// let havaSeraiti = prompt('Hava seraitini daxil edin...').toLowerCase();

// if (havaSeraiti == 'yagisli') {
//     console.log('Cetir al');
// } else if (havaSeraiti == 'qarli') {
//     console.log('Cixma');
// } else if (havaSeraiti == 'gunesli') {
//     console.log('eyek tax')
// } else {
//     console.log('baxda ozun');
// }


// let weather = prompt('hava seraiti daxil edin').toLowerCase();

// switch (weather) {
//     case 'sunny':
//         console.log('Hava guneslidir');
//         break;
//     case 'cloudy':
//         console.log('Hava buludludur');
//         break;
//     case 'rainy':
//         console.log('Hava yagislidir');
//         break;
//     default:
//         console.log('asdlkasjdas')
//         break;
// }

// let isRaining = true;

// isRaining ?
//     console.log('yagislidir')
//     :
//     console.log('deyil')

let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

// let index = Number(prompt('index daxil edin...')) - 1;

// console.log(months[index]);

// console.log(months[9]);

// let i = prompt('index daxil edin...');

// console.log(months[i]);

// const tip1 = typeof 2

// console.log(tip1);
