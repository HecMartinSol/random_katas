// https://www.codewars.com/kata/536602df5d0266e7b0000d31/train/javascript
var Morse = {
    alpha : {
        'A': '10111',
        'B': '111010101',
        'C': '11101011101',
        'D': '1110101',
        'E': '1',
        'F': '101011101',
        'G': '111011101',
        'H': '1010101',
        'I': '101',
        'J': '1011101110111',
        'K': '111010111',
        'L': '101110101',
        'M': '1110111',
        'N': '11101',
        'O': '11101110111',
        'P': '10111011101',
        'Q': '1110111010111',
        'R': '1011101',
        'S': '10101',
        'T': '111',
        'U': '1010111',
        'V': '101010111',
        'W': '101110111',
        'X': '11101010111',
        'Y': '1110101110111',
        'Z': '11101110101',
        '0': '1110111011101110111',
        '1': '10111011101110111',
        '2': '101011101110111',
        '3': '1010101110111',
        '4': '10101010111',
        '5': '101010101',
        '6': '11101010101',
        '7': '1110111010101',
        '8': '111011101110101',
        '9': '11101110111011101',
        '.': '10111010111010111',
        ',': '1110111010101110111',
        '?': '101011101110101',
        "'": '1011101110111011101',
        '!': '1110101110101110111',
        '/': '1110101011101',
        '(': '111010111011101',
        ')': '1110101110111010111',
        '&': '10111010101',
        ':': '11101110111010101',
        ';': '11101011101011101',
        '=': '1110101010111',
        '+': '1011101011101',
        '-': '111010101010111',
        '_': '10101110111010111',
        '"': '101110101011101',
        '$': '10101011101010111',
        '@': '10111011101011101',
        ' ': '0' // Technically is 7 0-bits, but we assume that a space will always be between two other characters
    },

    /**
     * Recieves: String representing the message and will 
     * Returns: array of signed 32-bit integers in big-endian order and in two's complement format
     */
    encode: (message) => {
        var binCode = String(message).split("").map(x => Morse.alpha[x] + "000").join("")       
        var binParts = Morse.splitInPieces(binCode)
        console.log("[encode]> " + message + " = " + binParts.join(""));
        // 1000100010001000100010001000101000100000000000000000000000000000
        // 10001000100010001000100010001010

        var integerArray = binParts.map(x => Morse.binarytwos2signed(x))
        
        console.log("[encode]> ------------------------------");
        console.log(integerArray);
        console.log(message);
        console.log("[/ encode]> ------------------------------\n\n\n\n");

        return integerArray;
    },
    decode: (integerArray) => {

        var binCodeParts = integerArray.map(x => Morse.splitInPieces(Morse.signed2binarytwos(x),32,"0","left"))
        console.log(binCodeParts);
        
        var binCode = binCodeParts.join("")
        // 1000 1000 1000 1000 1000 1000 1000 1010100000000000000000000000000000
    
        console.log("[DECODE]> " + binCode);

        // separa por espacios (000+0+000 es un espacio) y filtra los vacios
        var binPartsWords = binCode.split("0000000").filter(x => x != "" && x != "000") 
        // separa cada palara por letra (000 separa letras)
        var binParts = binPartsWords.map(x => x.split("000"));
        // para cada palabra, itera sus letras y para cada una coge la clave del codigo. 
        // Une las letras (por "") y las palabras (por espacio " ")
        var message = binParts.map(x => x.map(y => Morse.getCharByBin(y)).join("")).join(" ").trim()
        console.log("[DECODE]> ------------------------------");
        console.log(integerArray);
        console.log(message);
        console.log("[/ DECODE]> ------------------------------\n\n\n\n");
        
        return message
    },


    binarytwos2signed: (bin) => {
        return (parseInt(bin, 2) >> 0)
    },
    signed2binarytwos: (signed) => {
        return (signed >>> 0).toString(2);
    },
    splitInPieces : (str, size=32, pad="0", position="right") => {
        str_a = str.split("")
        
        while (str_a.length % size != 0){
            if (position == "right") {
                str_a.push(pad)
            } else if (position == "left") {
                str_a.unshift(pad)
            }

        }
        
        var rex = /.{32}/g
        // var rex = '\/\.\{' + size + '\}\/\g'
        
        return str_a.join("").match(rex);
    },
    getCharByBin : bin => {
        return Object.keys(Morse.alpha).find(key => Morse.alpha[key] === bin);
    }
};

// Morse.encode('HELLO WORLD') === [-1440552402, -1547992901, -1896993141, -1461059584];
// Morse.decode([-1440552402, -1547992901, -1896993141, -1461059584]) === 'HELLO WORLD';
Morse.encode('EEEEEEEIE') === [-2004318070, 536870912];
Morse.decode([-2004318070, 536870912]) === 'EEEEEEEIE';
// Morse.decode([-298086688]) === 'MMM';
// Morse.decode([3996880608]) === 'MMM';