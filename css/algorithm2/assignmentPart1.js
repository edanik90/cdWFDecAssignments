function multiply(x, y) {
    console.log(x);// prints 2
    console.log(y);// prints 3
}
b = multiply(2, 3);
console.log(b); // prints "undefined" because nothing has been returned from the function


function multiply(x, y) {
    return x * y; // returns x*y to where function was called
}
b = multiply(2, 3); // returns 6 (2*3) from the function and assignes it to variable b
console.log(b); //prints b, which is 6
console.log(multiply(5, 2)); //prints 10 as a result of function (5*2)



var x = [1, 2, 3, 4, 5, 10]; // sets an array 
for (var i = 0; i < 5; i++) {
    i = i + 3; // each step of the loop adds 3 to iterator
    console.log(i);// prints value of i each time, which will be 3, 7
}

var x = 15;
console.log(x); // prints 15
function awesome() {
    var x = 10;
    console.log(x); // prints 10 only when function is called
}
console.log(x); // prints 15
awesome(); // prints 10 
console.log(x); // prints 15


for (var i = 0; i < 15; i += 2) { //
    console.log(i); // prints i for each step: 0,2,4,6,8,10,12,14
}

for (var i = 0; i < 3; i++) { // i = 0,1,2
    for (var j = 0; j < 2; j++) { // j = 0,1
        console.log(i*j); //prints 0,0,0,1,0,2
    }  
 }

 function looping(x,y){
    for(var i=0; i<x; i++){ i = 0,1,2
       for(var j=0; j<x; j++){ // j = 0,1,2
           console.log(i*j); //prints 0,0,0,0,1,2,0,2,4
       } 
    }
 }
 z = looping(3,3); //calls the function and gives it parameters 3,3
 console.log(z); //prints undefined, because nothing has been returned from the function



 function looping(x,y){
    for(var i=0; i<x; i++){ //i = 0,1,2
       for(var j=0; j<y; j++){ //j = 0,1,2,3,4
          console.log(i*j);// prints 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8
       } 
    }
    return x*y; // returns 3*5
 }
 z = looping(3,5); //z = 15
 console.log(z); // prints 15
