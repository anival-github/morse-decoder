const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arrayBig = [];
    for (let i = 0; i <= expr.length - 1; i +=10) {
    arrayBig.push(expr.substr(i, 10));
    }

    let matrix = arrayBig.map(function(element) {
        if (element !== "**********") {
            let elementArray = [];
            for (let i = 0; i <= element.length - 1; i +=2) {
                if ((element[i] + element [i+1]) !== '00') {
                    if ((element[i] + element [i+1]) === '10') {elementArray.push('.')}
                    if ((element[i] + element [i+1]) === '11') {elementArray.push('-')}
                };
            }
            return elementArray.join('');
        } else {
            return ' ';
        };
    });

    for (let i = 0; i <= matrix.length - 1; i +=1) {
        if (matrix[i] in MORSE_TABLE) {matrix[i] = MORSE_TABLE[`${matrix[i]}`]};
    }

    return matrix.join('');
}

module.exports = {
    decode
}