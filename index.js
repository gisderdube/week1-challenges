console.log('Welcome to the array & DOM challenges');

// -----------CHALLENGE 1----------
// INSTRUCTIONS: use Array.forEach() to console.log() each element

// DO NOT TOUCH BELOW
var arr = ['Hello', 'my', 'name', 'is', 'John'];
// DO NOT TOUCH ABOVE

function logArrayElements(input) {
    arr.forEach(function(el) {
        console.log(el);
    });
}

// UNCOMMENT BELOW
logArrayElements(arr);

// -----------CHALLENGE 2----------
// INSTRUCTIONS: use Array.map() to return a new array with the uppercase elements
// expected result:
// [
//     'HELLO',
//     'MY',
//     'NAME',
//     'IS',
//     'JOHN',
// ]

function transformUppercase(input) {
    return arr.map(arr => arr.toUpperCase());
}

// UNCOMMENT BELOW
console.log(transformUppercase(arr));

// -----------CHALLENGE 3----------
// INSTRUCTIONS: use Array.reduce() to concatenate all the strings in the array
// expected result: 'Hello my name is John'

function reduceStrings(input) {
    //let acc = [];
    const b = input.reduce((acc, val) => {
        return acc + ' ' + val;
    });
    return b;
}
console.log(reduceStrings(arr));

// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.map() to return an array containing the city of each element
// expected result:
// [
//     'Berlin',
//     'New York',
//     'Sydney',
//     'Tokyo',
// ];

// DO NOT TOUCH BELOW
arr = [
    {
        name: 'John',
        address: { city: 'Berlin' }
    },
    {
        name: 'Albert',
        address: { city: 'New York' }
    },
    {
        name: 'Hannah',
        address: { city: 'Sydney' }
    },
    {
        name: 'Paul',
        address: { city: 'Tokyo' }
    }
];
// DO NOT TOUCH ABOVE

function getCitiesArray(input) {
    const a = arr.map(arr => arr.address.city);
    return a;
}

// UNCOMMENT BELOW
console.log(getCitiesArray(arr));

// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.find() to return the person living in Sydney
// expected result:
// {
//     name: 'Hannah',
//     address: { city: 'Sydney' },
// },

function getSydneyCitizen(input) {
    const pers = input.find(where => where.address.city === 'Sydney');
    return pers;
}
// function getSydneyCitizen(input) {
//     const pers = input.find(where => where.address.city.includes('Sydney'));
//     return pers;
// }
// UNCOMMENT BELOW
console.log(getSydneyCitizen(arr));

// -----------CHALLENGE 5----------
// INSTRUCTIONS: use Array.filter() to return a new Array with persons older than 24 years
// expected result:
// [
//     {
//         name: 'Hannah',
//         age: 36
//         address: { city: 'Sydney' },
//     },
//     {
//         name: 'Paul',
//         age: 48,
//         address: { city: 'Tokyo' },
//     },
// ];

// DO NOT TOUCH BELOW
arr.forEach(function(el, index) {
    el.age = (index + 1) * 12;
});
// DO NOT TOUCH ABOVE
function getWisePeople(input) {
    const wise = input.filter(el => el.age > 24);
    return wise;
}

// UNCOMMENT BELOW
console.log(getWisePeople(arr));

// -----------CHALLENGE 5----------
// INSTRUCTIONS: use Array.slice() to return a new array with the two people in the middle
// expected result:
// [
//     {
//         name: 'Albert',
//         age: 24,
//         address: { city: 'New York' },
//     },
//     {
//         name: 'Hannah',
//         age: 36,
//         address: { city: 'Sydney' },
//     },
// ]

function getMiddlePeople(input) {
    //check if array is even or odd and return 2 middle elements or 1 (for odd array)
    if (input.length % 2 === 0) {
        let ba = input.splice(input.length / 2 - 1, 2);
        return ba;
    } else {
        let ba = input.splice(Math.floor(input.length / 2), 1);
        return ba;
    }
}

// UNCOMMENT BELOW
console.log(getMiddlePeople(arr));

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select all paragraphs.
// 2. Use Array.map() to return a new array with all of the heights (element.clientHeight) of the selected paragraphs.
// HINT: don't forget to wrap document.querySelector in Array.from()

function getParagraphHeights() {
    let arr = Array.from(document.querySelectorAll('p'));
    let arr2 = arr.map(el => el.clientHeight);
    return arr2;
}

// UNCOMMENT BELOW
console.log(getParagraphHeights());

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select one paragraph
// 2. Use Object.keys() to get an array of all keys of the element.style property
// 3. Finally, use Array.filter() to return a new array with keys that start with the letter 'm'

function getFilteredStyleKeys() {
    let arr3 = document.querySelector('p');
    return Object.keys(arr3.style).filter(el => el[0] === 'm');
}

// UNCOMMENT BELOW
console.log(getFilteredStyleKeys());

// -----------CHALLENGE 7----------
// INSTRUCTIONS:
// 1. Use document.querySelectorAll to select all paragraphs.
// 2. Use Array.forEach() to modify the 'innerHTML' of each element. You can set just any text inside.

function changeHtml() {
    let arr4 = document.querySelectorAll('p');
    arr4.forEach(function(el, i) {
        el.innerHTML = `This is a changed paragraph for paragraph ${i}`;
    });
    // return arr4;
}

// UNCOMMENT BELOW
changeHtml();
