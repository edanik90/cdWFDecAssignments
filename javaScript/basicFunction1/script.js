function a() {
    return 35;
}
console.log(a()) // prints 35


function a() {
    return 4;
}
console.log(a() + a()); // returns 4 + 4, prints 8


function a(b) {
    return b;
}
console.log(a(2) + a(4)); // returns 2 + 4, prints 6


function a(b) {
    console.log(b); // prints b, which is 3
    return b * 3;
}
console.log(a(3)); // returns b * 3, prints 9

function a(b) {
    return b * 4;
    console.log(b); // doesn't run this line, because return was already executed 
}
console.log(a(10)); // returns b * 4, prints 40


function a(b) {
    if (b < 10) {
        return 2;
    }
    else {
        return 4;
    }
    console.log(b); // in this case this line never runs, one of the previos conditions will always be true and both of them have return
}
console.log(a(15)); // 15 isn't greater than 10, so returns and prints 4


function a(b, c) {
    return b * c;
}
console.log(10, 3); // prints 10, 3
console.log(a(3, 10)); // returns 10 * 3, prints 30


function a(b){
    for(var i=0; i<10; i++){
        console.log(i); // the function was never called, so this will not run
    }
    return i;

}
console.log(3); //prints 3
console.log(4); //prints 4


function a(){
    for(var i=0; i<10; i++){// i = 0, 3, 6, 9
        i = i +2; // i = 2, 5, 8, 11
        console.log(i); //prints 2, 5, 8, 11
    }
}
a(); 


function a(b,c){
    for(var i=b; i<c; i++) { // i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
       console.log(i);
   }
   return b*c;
}
a(0,10);// returns b * c, which is 0 * 10, prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(a(0,10)); //prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Returns b * c, which is 0 * 10, prints 0


function a(){
    for(var i=0; i<10; i++){ // i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
       for(var j=0; j<10; j++){ // j = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
           console.log(j); // would print 10 times: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
       }
       console.log(i); // would print 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    }
}
// prints nothing, function was never called


function a(){
    for(var i=0; i<10; i++){// i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        for(var j=0; j<10; j++){// j = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
            console.log(i,j);  /*would print: 0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9
                                        then: 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9
                                        then: 2, 0, 2, 1, 2, 2, 2, 3, 2, 4, 2, 5, 2, 6, 2, 7, 2, 8, 2, 9
                                        ................................................................
                                        last: 9, 0, 9, 1, 9, 2, 9, 3, 9, 4, 9, 5, 9, 6, 9 ,7, 9 ,8, 9, 9  */
        }
        console.log(j,i); // would print ...10, 0 ...10, 1 ...10, 2 ...10, 3 ...10, 4 ...10, 5 ...10, 6 ...10, 7 ...10, 8 ...10, 9
    }
} // prints nothing, function was never called


var z = 10;
function a(){
    var z = 15;
    console.log(z); // would print 15, but function will be never called
}
console.log(z); //prints 10


var z = 10;
function a(){
    var z = 15;
    console.log(z); 
}
a(); //calls function, prints 15
console.log(z); //prints 10


var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();// returns z, which is 15, prints 15
console.log(z); //prints 15