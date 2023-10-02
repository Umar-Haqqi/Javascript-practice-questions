// 16- Write a function to get the first element of an array. passing a parameter 'n' will return the first 'n' element of the array.


const retriveArrElem = (arr, n = 1) => {
    // console.log(arr,n);

    if (n <= arr.length) {
        for (i = 0; i < n; i++) {
            console.log(arr[i]);
        }
    }
    else {
        console.log(`${n} is greater then arr`);
    }
}

retriveArrElem([10, 20, 30, 40, 50, 60], 3)