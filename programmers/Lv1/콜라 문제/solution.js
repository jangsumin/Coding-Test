function solution(a, b, n) {
    let answer = 0;

    while (n >= a) {
        let rest = n % a;
        n = Math.floor(n / a) * b;
        answer += n;
        n += rest;
    }

    return answer;
}