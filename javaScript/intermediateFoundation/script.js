function Sigma(num) {
    var sum = 0;
    for (i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(Sigma(5));


function Factorial(num) {
    var fact = 1;
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(Factorial(4));



// 0,1,1,2,3,5,8,13,21.....
function fib(idx) {
    var first = 0;
    var second = 1;
    var result = 0;
    for (var i = 0; i < idx - 1; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    console.log(result);
}
fib(2);

function SecondToLast(arr) {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length - 2];
}
console.log(SecondToLast([42, 2, "Dojo", false]));


function NthToLast(arr, n) {
    if (arr.length < n) {
        return null;
    }
    return arr[arr.length - n];
}
console.log(NthToLast([42, 2, "Dojo", false], 2));

function SecondLargest(arr) {
    var max = arr[0];
    var sec = arr[1];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            sec = max;
            max = arr[i];
        } else if (arr[i] > sec && arr[i] < max) {
            sec = arr[i];
        }
    }
    return sec;
}
console.log(SecondLargest([1, 2, 3, 4, 24, 12]));


function dubTrub(arr) {
    for (var i = 0; i < arr.length; i += 2) {
        arr.splice(i, 0, arr[i]);
    }
    console.log(arr);
}
dubTrub([0, 1]);