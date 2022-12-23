function solution(n, words) {
    const word = {};
    let answer = [];
    let lastWord = words[0][0];
    for (let i = 0; i < words.length; i++) {
        if (lastWord !== words[i][0]) {
            answer.push((i % n) + 1, Math.floor(i / n) + 1);
            break;
        }

        if (word[words[i]] === undefined) {
            word[words[i]] = 1;
        } else {
            answer.push((i % n) + 1, Math.floor(i / n) + 1);
            break;
        }
        lastWord = words[i][words[i].length - 1];
    }
    if (answer.length === 0) answer = [0, 0];
    return answer;
}
