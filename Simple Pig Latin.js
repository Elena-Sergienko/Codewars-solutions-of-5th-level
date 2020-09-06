// 5 kyu
// Simple Pig Latin

// https://www.codewars.com/kata/520b9d2ad5c005041100000f
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    if (str[str.length - 1] === '!' || str[str.length - 1] === '?') {

        let arr = str.split(' ');
        let arrN = [];
        let res = '';

        for (let i = 0; i < arr.length; i++) {
            arrN.push(''.repeat(arr.length));
            arrN[0] = arrN[0] + arr[i].slice(1,) + arr[i][0] + 'ay' + ' ';
        }
        res = arrN[0].slice(0, -4) + str[str.length - 1];

        return res;
    } else {
        arr = str.split(' ');
        let arrN = [];
        let res = '';
        for (let i = 0; i < arr.length; i++) {
            arrN.push(''.repeat(arr.length));
            arrN[0] = arrN[0] + arr[i].slice(1,) + arr[i][0] + 'ay' + ' ';
        }
        return arrN[0].slice(0, -1);
    }
}