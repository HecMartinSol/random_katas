const romanNumbers = [
    { symbol: "I", value: 1 },
    { symbol: "V", value: 5 },
    { symbol: "X", value: 10 },
    { symbol: "L", value: 50 },
    { symbol: "C", value: 100 },
    { symbol: "D", value: 500 },
    { symbol: "M", value: 1000 },
]
function getRomanValue(str){
    return romanNumbers.find(x => x.symbol.toUpperCase() == str.toUpperCase()).value;
}
function solution(roman) {
    var numbers = roman.split("");
    
    if (numbers.length == 0) return 0;
    if (numbers.length == 1) return getRomanValue(numbers[0]);

    var total = getRomanValue(numbers[0])
    var prevValue = getRomanValue(numbers[0])
    for (let i = 1; i < numbers.length; i++) {
        const n = numbers[i];
        let currValue = getRomanValue(n);

        if(prevValue < currValue){
            total -= prevValue
            currValue = currValue - prevValue
        }

        total += currValue

        prevValue = getRomanValue(n);
    }
    
    return total;
}

console.log(solution('XXI') == 21)
console.log(solution('I') == 1)
console.log(solution('IV') == 4)
console.log(solution('MMVIII') == 2008)
console.log(solution('MDCLXVI') == 1666)