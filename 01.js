// 01_ Given a string, reverse each word in the sentence

let str = "reverse each word in the sentence";
console.log(str);

let words = str.split(" ");
// console.log(words);  

// words.forEach((word) => {
//     // console.log(word);
//     // console.log(word.split(""));
//     let result = word.split("").reverse().join("");
//     console.log(result);
// use map to save result return
// })

let reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
})

reversedStrResult = reversedWords.join(" ");

// console.log(reversedWords);
console.log("reversed:",reversedStrResult);



