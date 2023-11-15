function flexibleFunc() {

    console.log(arguments.length);

    if (arguments.length == 0) {
        console.log("no argument passed");
    }
    else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}

const storingFunction = flexibleFunc;

storingFunction(2,8);