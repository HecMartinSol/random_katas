//https://www.codewars.com/kata/5287e858c6b5a9678200083c/solutions/javascript
function narcissistic(value) {
    var digits = String(value).split("");
    return digits.map(x => Math.pow(parseInt(x), digits.length)).reduce((acc, x) => acc + x) == value;
}