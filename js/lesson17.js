// ! Decleration Function

// function sayHelloAndSayGoodBy() {
//     console.log('Hello');

//     console.log('--------------------------------')

//     console.log('By by');
// }

// Fnuksiyanioi calistirmaq veya invoke etmek ucun adini cagirib moterizeleri qoymaliyiq.

// sayHelloAndSayGoodBy();

// geriye hecne return etmeyenler void funksiyalar;

// function ikiyeVur(num1) {
//     return num1 * 2;
// }

// console.log(ikiyeVur(4))

// function sayHello(ad, soyad) {

//     if (typeof ad !== 'string' || typeof soyad !== 'string') {
//         return 'Siz dogru tip daxil etmediniz.';
//     }

//     return `Salam ${ad} ${soyad}`;
// }

// console.log(sayHello('Aygun', 'Orucova'));
// console.log(sayHello('Elovset', 'Memmedli'));
// console.log(sayHello(4, true));

// function topla() {
//     let d1 = parseInt(prompt('deyer biri girin'));
//     let d2 = +prompt('deyer ikini girin');

//     return d1 + d2;
// }

// console.log(topla());


// ! Bir funksiya yazin ki parametr olaraq bir array alacaq ve bu arrayin icersiinde olan 
// ! sadece string deyerleri taparaq ekrana yazdirsin.

// let numbers = [1, 2, 'HTML', true, 'CSS', 'JS', 'JSX', 22, undefined];
// let massiv = [1, 2, 3, 4, 5];

// function findStrings(x) {
//     for (let i = 0; i < x.length; i++) {
//         if (typeof x[i] == 'string') {
//             console.log(x[i]);
//         }
//     }
// }

// findStrings([1, 2, 'HTML', true, 'CSS', 'JS', 'JSX', 22, undefined]);


// function sayHello(ad) {
//     console.log(`Salam ${ad}`)
// }

// sayHello('Mirze')
// sayHello('Elovset')
// sayHello('Aygun')


// Butun ededleri toplayib ekrana yazdiran function yazin.
function topla() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }

    return sum;
}

console.log(topla(1, 4))

// let numbers = [1, 2, 3, 4, 5];
// let cem = null; // undefined

// for (let i = 0; i < numbers.length; i++) {
//     // cem = cem + numbers[i];
//     cem += numbers[i];
// }

// console.log(cem);


// ? Function Expression;

const bolme = function bolme() {

}

// Anonymous Function Expression
const vurma = function () {

}

// Arrow function Expression
const cixma = (x = 2, y = 1) => {
    return x - y;
}

console.log(cixma(3));