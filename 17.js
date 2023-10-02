// 17- Write a function to get the last element of an array. passing a parameter 'n' will return the last 'n' element of the array.

const retriveLastArrElem = (arr, n = 1) => {
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            // console.log(arr.length - 1 - i);
            console.log(arr[arr.length - 1 - i]);
        }
    }
    else {
        console.log(`${n} is greater then arr`);
    }
}

retriveLastArrElem([1, 2, 3, 4, 5, 6], 3);