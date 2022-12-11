function solution(n) {
    let answer = '';
    for (let i = 0; i < Math.floor(n / 2); i++) {
        answer += '수박';
    }
    n % 2 === 0 ? (answer += '') : (answer += '수');
    return answer;
}
