// 시간 초과 코드
function solution(n, works) {
    // works의 원소의 합이 n보다 작거나 같을 때 0 반환
    if (works.reduce((acc, cur) => acc + cur) <= n) return 0;

    while (n > 0) {
        works.sort((a, b) => a - b);
        works.push(works.pop() - 1);
        n = n - 1;
    }

    return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
