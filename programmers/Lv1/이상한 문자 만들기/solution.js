function solution(s) {
    let answer = [];
    s.split(' ').map((word) => {
        let newWord = '';
        word.split('').map((char, idx) => {
            if (idx % 2 === 0) newWord += char.toUpperCase();
            if (idx % 2 === 1) newWord += char.toLowerCase();
        });
        answer.push(newWord);
    });
    return answer.join(' ');
}
