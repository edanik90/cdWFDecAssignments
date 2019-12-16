function a(x, y) {
    return 5;
}
console.log(a(5, 5)) // prints 5


function a(x, y) {
    z = [] //creates an empty array
    z.push(x); //puts x at the end of array
    z.push(y); //puts y at the end of array
    z.push(5); //puts 5 at the end of array
    console.log(z); // prints array [x,y,5] once function is called
    return z;
}
b = a(2, 2) //returns z here, which is [2,2,5] and prints it
console.log(b); // prints b [2,2,5]
console.log(a(6, 8)); // calls function a, prints z [6,8,5], then returns z here and prints it again [6,8,5]

function a(x) {
    z = [];//creates an empty array
    z.push(x);//puts x at the end of array
    z.pop();// deletes last element of array
    z.push(x);//puts x at the end of array
    z.push(x);//puts x at the end of array
    return z;
}
y = a(2);//returns z here, which is [2,2]
y.push(5);// adds 5 at the end of array y
console.log(y);// prints y, which is [2,2,5]


function a(x) {
    if (x[0] < x[1]) {
        return true;
    }
    else {
        return false;
    }
}
b = a([2, 3, 4, 5]) //calls function, checks if x[0] > x[1], which in our case 2 > 3, so returns true
console.log(b); //prints b, which is true;


function a(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = 'Coding';
        }
    }
    return x;
}
console.log(a([1, 2, 3, 4]))//all given numbers in array are greater than 0, so each step of the for loop it will
//replace current value of x[i] with string 'Coding', and then returns updated array and prints it: ['Coding','Coding','Coding','Coding']

function a(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 5) {
            x[i] = 'Coding'; // 5 is not greater than 5, so it stays; 7 is greater than 5, replaces it with 'Coding', 4 stays
        }
        else if (x[i] < 0) {//only -1 is valid here, so replaces it with 'Dojo'
            x[i] = 'Dojo';
        }
    }
    return x;
}
console.log(a([5, 7, -1, 4])) // [5, 'Coding', 'Dojo', 4]

function a(x) {
    if (x[0] > x[1]) { // 5 isn't greater than 10,
        return x[1];// so skips this part
    }
    return 10;
}
b = a([5, 10])
console.log(b); // 10

function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];// calculates the summ of all elements in x array
       console.log(sum);
    }
    return sum;
}
// x was never given, so nothing returns