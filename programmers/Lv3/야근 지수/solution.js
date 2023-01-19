// n을 감소시킬 때마다 정렬을 사용하는 것이 시간 초과의 원인
function solution(n, works) {
    if (works.reduce((acc, cur) => acc + cur) <= n) return 0;

    const len = works.length;
    works.sort((a, b) => a - b);

    while (n) {
        let max = works[len - 1];

        for (let i = len - 1; i >= 0; i--) {
            if (works[i] >= max) {
                works[i]--;
                n--;
            }
            if (!n) break;
        }
    }

    return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
