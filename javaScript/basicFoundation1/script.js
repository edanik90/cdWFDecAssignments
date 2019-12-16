function one() {
    for (var i = 1; i <= 255; i++) {
        console.log(i);
    }
}

function two() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}

function three() {
    var sum = 0;
    for (var i = 0; i <= 5000; i += 2) {
        sum = sum + i;
    }
    return sum;
}

function four(arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(four([1, 2, 5]));
console.log(four([-5, 2, 5, 12]));

function five(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(five([-5, 2, 5, 12]));

function six(arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(six([-5, 2, 5, 12]));

function seven() {
    var arr = [];
    for (var i = 1; i <= 50; i += 2) {
        arr.push(i);
    }
    console.log(arr);
}
seven();

function eight(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            Y = arr[i];
            count++;
        }
    }
    return count;
}
console.log(eight([2, 4, 6, 8], 5));

function nine(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(nine([2, 3, 4]));

function ten(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(ten([-2, 10, 5, -1]));

function eleven(arr) {
    var newarr = [];
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    newarr.push(max, min, sum / arr.length);
    return newarr;
}
console.log(eleven([1, 4, 4]));

function twelve(arr) {
    var temp;
        temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        return arr;
}
console.log(twelve([1, 5, 10, -2]));


function thirteen(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]='Dojo';
        }
    }
    return arr;
}
console.log(thirteen([-1,-3, 2, 4, -5]));