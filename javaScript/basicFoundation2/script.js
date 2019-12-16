function one(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }
    return arr;
}
console.log(one([-1, -2, 3, 4, -5]));

function two(arr) {
    var min = arr[0];
    var max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('Lowest value of the array is ' + min);
    return max;
}
console.log(two([-1, -2, 4, 7]));

function three(arr) {
    console.log('Second to last value is ' + arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}
console.log('First odd value is' + three([2, 10, 3, 6, 7]));

function four(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i];
        newarr.push(arr[i]);
    }
    return newarr;
}
console.log(four([1, 3, 4, 6]));

function five(arr) {
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}
console.log(five([-1, 1, 3, 4]));



function six(arr) {
    var oddCount = 0;
    var evenCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddCount++;
            evenCount = 0;
        } else {
            evenCount++;
            oddCount = 0;
        }
        if (oddCount == 3) {
            console.log('Thats odd!');
            oddCount = 0;
        }
        if (evenCount == 3) {
            console.log('Even more so!');
            evenCount = 0;
        }
    }
    return arr;
}
console.log(six([1, 2, 1, 2, 2, 2, 1, 1]));

function seven(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i]++;
        }
    }
    return arr;
}
console.log(seven([1, 2, 3, 4, 5, 6]));


function eight(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}
console.log(eight(['hello', 'dojo', 'coding!', 'world!']));


function nine(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] + 7;
    }
    return newArr;
}
console.log(nine([1, 2, 3]));

function ten(arr) {
    var temp;
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(ten([3, 1, 6, 4, 2, 5]));


function eleven(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i] * -1);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(eleven([1, 4, -3, -6, 1]));


function twelve(arr) {
    var hungry = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            arr[i] = "yummy";
            hungry = 0;
        } else {
            hungry = 1;
        }
    }
    if (hungry == 1) {
        console.log("I'm hungry");
    } else {
        return arr;
    }
    return arr;
}
console.log(twelve(["fish", "cake", "food"]));


function thirteen(arr) {
    for (i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
}
thirteen([1, 2, 3, 4]);

function fourteen(arr, num) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(fourteen([1, 2, 3, 4], 2));