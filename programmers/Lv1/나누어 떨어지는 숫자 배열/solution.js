function solution(arr, divisor) {
    const answer = [];
    arr.map((el) => {
        if (el % divisor === 0) answer.push(el);
    });
    answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b);
    return answer;
}
