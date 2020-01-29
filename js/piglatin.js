// https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/javascript
function pigIt(str) {
    var x = str.split(" ")
        .map(word => word.split(""))
        .map(word => {
            word.join("").match(/[a-zA-Z]/) ? word.push(word.shift(), "a", "y") : word;
            return word;
        })
        .map(x => x.join("")).join(" ")
    return x
}