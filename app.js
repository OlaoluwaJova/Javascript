if (3 !== 3) {
    // console.log('correct');
} else {
    // console.log('wrong');
}

let color = 'blue';
if (color === 'purple' || color === 'lilac' || color === 'blue') {
    // console.log('Great choice');
}

let empty = 0;

if (!empty) {
    // console.log('Get out of here');
} else {
    // console.log(`You are welcome ${empty.toUpperCase().slice(3)}`);
}

// operator precedence
// ! && ||;

let a = 7;
a == 7 || (a === 3 && a > 10);

// let day = 'saturday';

// if (day === 1) {
//     console.log('Sunday');
// } else if (day === 2) {
//     console.log('Monday');
// } else if (day === 3) {
//     console.log('Tuesday');
// } else if (day === 4) {
//     console.log('Wednesday');
// } else if (day === 5) {
//     console.log('Thursday');
// } else if (day === 6) {
//     console.log('Friday');
// } else if (day === 7) {
//     console.log('Saturday');
// } else {
//     console.log('That is an Invalid day of the week');
// }

let day = 'sunday';
// This switch statement can be use for the forget password setup
// where a user is asked to input any old password, if it matches proceed with access.
// switch (day) {
//     case 1:
//     case 'sunday':
//         console.log('Sunday');
//         break;
//     case 2:
//     case 'monday':
//         console.log('Monday');
//         break;
//     case 3:
//     case 'tuesday':
//         console.log('Tuesday');
//         break;
//     case 4:
//     case 'wednesday':
//         console.log('Wednesday');
//         break;
//     case 5:
//     case 'thursday':
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 'saturday':
//     case 7:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('Invalid Day');
//         break;
// }

//{ teneray operator

// let num = 4;

// num === 7 ? console.log('lucky') : console.log('bad');

// condition  ?             true    :   false;
// }

// ARRAY
// some of the method used in strings can be used in an Array//
// Arrays are mutable unlike strings that are immutable.//
let shoppingList = [
    'ice',
    'cheese',
    'cereals',
    'oranges',
    'yellow',
    'green',
    'blue',
];

// Common Array methods are
// PUSH - add from end
// Pop - Remove from end
// Shift - Remove from front
// Unshift - add from front
// concat - for merging two arrays together

shoppingList.unshift('Frankiscence'); //will add frankisce to the front
shoppingList.shift();

let colors = ['fruits', 'veggies'];

let newArray = shoppingList.concat(colors);

// For searching a values.
// include //could be used for password and username check.
// shoppingList.includes('blue'); // TRUE
// indexeOf

if (shoppingList.includes('green')) {
    // console.log('Yeah!!, I am available');
}

// console.log(shoppingList.indexOf('cereals'));

// .join()
let fresh = [1, 2, 3, 'numbers'];
// this reverse the content the other

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let water = animals.slice(0, 3);
let land = animals.slice(3);

// .sort() is used to order an array in aphabetical order,it mutates the array
// .sort() works as string, it can not be used on an integer array

// using const with a array will work immutably as so should arrays, nonetheless the error comes when you try to reassign that const array. it will throw in an error

// const myName = ['Olaoluwa', 'Vincent', 'Adisa'];
// myName.pop(); //this will pop out Adisa from the Array.

// myName = ['Jova', 'Swalla']; // this will throw in an error
// Nonetheless if this operation was done on a variable(LET) instead of const it will work fine

// O B J E C T S

// const names = {
//     firstName: 'Olaoluwa',
//     middleName: 'Vincent',
//     lastName: 'Adisa',
//     age: 20,
//     birthday: [28, 'december', 2018],
// };

// While LOOP

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

// this says while guess is not the same with target keep running the code
// then when they are the same, break out of the code

// while (guess !== target) {
//     console.log(`Target ${target} Guess ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target ${target} Guess ${guess}`);
// console.log('Congratulations!!!');

const okay = [
    [1, 2, 3],
    [4, 5, 6],
    // okay has the group array
];
// console.log(okay);
// for (let i = 0; i < okay.length; i++) {
//     let main = okay[i];
//     // console.log(main);
//     // main has individual arrays
//     let total = 0;
//     for (let j = 0; j < main.length; j++) {
//         console.log(main[j]);
//         total += main[j];
//     }
//     console.log(`${main} and the total = ${total}`);
// }

// for (let main of okay) {
//     let sum = 0;
//     // console.log(main);
//     for (let total of main) {
//         console.log(total);
//         sum += total;
//     }
//     console.log(`${main} and the total = ${sum}`);
// }

const names = {
    firstName: 'Olaoluwa',
    middleName: 'Vincent',
    lastName: 'Adisa',
    age: 20,
    birthday: [28, 'december', 2018],
};
// const birthday = names.birthday;
// console.log(
//     `I was born on the ${birthday[0]} of ${birthday[1]}, ${birthday[2]}`
// );

// for (const title of Object.keys(names)) {
//     console.log(title);
//     // console.log(names[title], title);
// }

for (const prop in names) {
    // console.log(prop);
    const element = names[prop];
    // console.log(element);

    // if (Object.hasOwnProperty.call(names, prop)) {
    //     const element = names[prop];
    //     console.log(element);
    // }
}

// let A = [4, 5, 6, 7, 5];
// for (let i = 0; A.length < 8; i++) {
//     A.push(A[i]);
//     // i++;
//     console.log(A);
// }

// let