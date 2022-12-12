function solution(s) {
    const digitToWord = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    Object.keys(digitToWord).map((word) => {
        if (s.includes(word)) s = s.replaceAll(word, digitToWord[word]);
    });
    return parseInt(s);
}
