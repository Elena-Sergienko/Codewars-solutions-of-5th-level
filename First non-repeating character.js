// 5 kyu
// First non-repeating character
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


function firstNonRepeatingLetter(s) {
    let lower = s.toLowerCase();

    let arr = s.split('');
    let arrLower = lower.split('');
    let l = arrLower[0];

    let res = arrLower.filter((el, i) => i === arrLower.indexOf(el) && i === arrLower.lastIndexOf(el))[0]
    let r = arrLower.indexOf(res)
    if (res === undefined) {
        return '';
    } else {
        return s[r];
    }
}