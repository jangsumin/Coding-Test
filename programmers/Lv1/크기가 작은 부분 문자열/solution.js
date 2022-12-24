function solution(t, p) {
    const len = p.length;
    let answer = 0;
    t = t.split('');
    for (let i = 0; i < t.length - len + 1; i++) {
        let word = t.slice(i, i + len);
        word = word.join('');
        if (parseInt(word) <= parseInt(p)) answer += 1;
    }
    return answer;
}
