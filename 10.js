// 10- Write a js function to get the number of occurences of each letter in specified string

function checkOccurences(str) {
    let occurences = {}
    str.split("").forEach((elem) => {
        if (occurences.hasOwnProperty(elem) === false) {
            occurences[elem] = 1;
        }
        else {
            occurences[elem]++;
        }
    });
    return occurences;
}

let result = checkOccurences("muhammad");
console.log(result);