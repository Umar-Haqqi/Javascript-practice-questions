// 18- Write a program to find the most frequent item of an array

function freq(arr) {
    let freqObj = {};

    arr.forEach((elem) => {
        if (freqObj.hasOwnProperty(elem)) freqObj[elem]++;
        else freqObj[elem] = 1;
    });
    console.log(freqObj);

    // console.log(Object.keys(freqObj));

    let result = Object.keys(freqObj).reduce((acc, next) => {
        return freqObj[acc] > freqObj[next] ? acc : next;
    })
    console.log(`The most frequent number is ${result}`);
}

freq([2,3,1,4,2,2,1]);