function solution(s) {
    let answer = true;
    if (s.length !== 4 && s.length !== 6) answer = false;
    if (s.match(/[^0-9]/g)) answer = false;
    return answer;
}
