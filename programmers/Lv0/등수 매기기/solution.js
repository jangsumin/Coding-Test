// 원소 길이가 2개이고, 평균을 굳이 구할 필요 없이 합만 알면 된다.
// 두 과목 점수의 합산이 원소인 배열에서 중복 등수까지 고려하여 세우려면
// 각 원소가 자신보다 높은 점수가 몇 개가 있는지 순회하면 된다.
// nth 가 1부터 시작해야 중복 등수가 정확히 산정된다.

function solution(score) {
    let result = [];
    let arr = score.map(e => e[0] + e[1]);
    for (const i of arr) {
        let nth = 1;
        for (const j of arr) {
            if (i < j) {
                nth++;
            }
        }
        result.push(nth);
    }
    return result;
}