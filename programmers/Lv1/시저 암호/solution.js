function solution(s, n) {
    let result = '';
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let doubledAlphabet = alphabet.repeat(2);
    // console.log(doubledAlphabet);
    s.split('').map((char) => {
        if (char >= 'a' && char <= 'z') {
            result += doubledAlphabet[doubledAlphabet.indexOf(char.toUpperCase()) + n].toLowerCase();
        } else if (char >= 'A' && char <= 'Z') {
            result += doubledAlphabet[doubledAlphabet.indexOf(char) + n];
        } else {
            result += char;
        }
    });
    return result;
}
