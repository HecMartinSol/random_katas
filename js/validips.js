/**
 * https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript/5b8d71ffa4dcc16d06000025
 * 
 * Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
 * IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
 * Input to the function is guaranteed to be a single string.
 * @param {*} str 
 */
function isValidIP(str) {
    var isValid = false;
    var ipParts = str.split(".");
    if(ipParts.length == 4){
        var validParts = ipParts.map(x => 
            (x.length == 3 && parseInt(x) >= 100 && parseInt(x) <= 255) || 
            (x.length == 2 && parseInt(x) >= 10 && parseInt(x) <= 99) || 
            (x.length == 1 && parseInt(x) >= 0 && parseInt(x) <= 9) 
        );
        
        isValid = validParts.reduce((a,b) => a && b); // todos los valores true
    }
    return isValid
 }


// console.log(isValidIP("1.2.3.4") == true);
// console.log(isValidIP("123.45.67.89") == true);
// console.log(isValidIP("1.2.3") == false);
// console.log(isValidIP("1.2.3.4.5") == false);
// console.log(isValidIP("123.456.78.90") == false);
// console.log(isValidIP("123.045.067.089") == false);
