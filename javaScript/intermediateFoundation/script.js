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


function dubTrub(arr) {
    for (var i = 0; i < arr.length; i += 2) {
        arr.splice(i, 0, arr[i]);
    }
    console.log(arr);
}
dubTrub([0, 1]);