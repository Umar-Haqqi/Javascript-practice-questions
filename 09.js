// 09- Write a function that accepts a string as a parameter and convert the first letter of each word of the string to uppercase


const captalize = (str) => {
    let allWords = str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    return allWords.join(" ")
}
console.log(captalize("hello umar haqqui welcome"));