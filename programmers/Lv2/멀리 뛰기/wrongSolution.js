// 테스트 케이스에서 전부 통과할 수 없었다.
function factorial(n) {
    let value = 1;
    while (n > 1) {
        value *= n;
        n--;
    }

    return value;
}

function combination(n, pick) {
    return (factorial(n) / (factorial(pick) * factorial(n - pick)));
}

function solution(n) {
    let answer = 1;
    let start = n - 1;
    let cnt = 1;
    
    while (start >= cnt) {
        answer += combination(start--, cnt++);
    }

    return answer % 1234567;
}

console.log(solution(5));