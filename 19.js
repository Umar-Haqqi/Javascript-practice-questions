// 19- write a program to shuffle an array

const shuffleArr = (arr) => {
    // console.log(arr);
    let totalShuffleArea = arr.length;

    while (totalShuffleArea > 0) {
        totalShuffleArea--;

        let indexToBeExchanged = Math.floor((Math.random() * totalShuffleArea));

        let shuffling = arr[totalShuffleArea];
        arr[totalShuffleArea] = arr[indexToBeExchanged];
        arr[indexToBeExchanged] = shuffling;
    }
    return arr;
}

console.log(shuffleArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
