// 07- Write a javascript function that checks whether a passed string in palindrome or not

let word = "hannah";

const check = (str) => {
    let reversedWord = str.split("").reverse().join("");
    return reversedWord;
}

const reversedWordResult = check(word);

(word === reversedWordResult) ? console.log("Yes! it is a palindrome") : console.log("no its not");
