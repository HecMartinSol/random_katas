// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/solutions/javascript
function solution(str) {
    str_a = str.split("")
    if (str_a.length % 2 != 0) str_a.push("_")
    return str_a.join("").match(/.{2}/g);
}