function solution(n, a, b) {
    let answer = 0;
    while (a != b) {
        n = n / 2;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer += 1;
    }
    return answer;
}
