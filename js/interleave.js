// https://www.codewars.com/kata/523d2e964680d1f749000135/solutions/javascript
function interleave(...arrays) {
    var maxLength = Math.max.apply(null, arrays.map(x => x.length))
  
    var inter = [];
    for (let i = 0; i < maxLength; i++)
        arrays.forEach(arr => inter.push(arr[i] != undefined ? arr[i] : null))
    return inter
}

/*
interleave([1, 2, 3], ["c", "d", "e"]);
console.log("...........................");

interleave([1, 2, 3], [4, 5]);
console.log("...........................");

interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log("...........................");

interleave([]);
console.log("...........................");
*/