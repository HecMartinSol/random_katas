// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/solutions/javascript
function add(n = null){
    var current = n || 0;
    
    var fn = function (num) {
        current += num;
        return fn;
    };
    
    // This is the main hack: 
    // We will return a function that when compared / concatted will call .toString and return a number.
    // Never use this in production code...
    fn.toString = function () {
        return current
    };


    return fn;
}


/*
console.log(add(1) == 1);
console.log("-----------------------");

console.log(add(1)(2) == 3);
console.log("-----------------------");

console.log(add(1)(2)(3) == 6);
console.log("-----------------------");
*/