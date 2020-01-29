// https://www.codewars.com/kata/52449b062fb80683ec000024/solutions/javascript
function generateHashtag(str) {
    str = "#" + str.trimRight().trimLeft().split(" ").filter(x => x != "").map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join("").trim()
    return str == "#" || str.length > 140 ? false : str
}


/*
console.log(generateHashtag("") == false);
console.log(generateHashtag(" ".repeat(200)) == false);
console.log(generateHashtag("Do We have A Hashtag") == "#DoWeHaveAHashtag");
console.log(generateHashtag("Codewars") == "#Codewars");
console.log(generateHashtag("Codewars Is Nice") == "#CodewarsIsNice");
console.log(generateHashtag("Codewars is nice") == "#CodewarsIsNice");
console.log(generateHashtag("code" + " ".repeat(140) + "wars") == "#CodeWars");
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat") == false);
console.log(generateHashtag("a".repeat(139)) == "#A");
console.log(generateHashtag("a".repeat(140)) == false);
*/