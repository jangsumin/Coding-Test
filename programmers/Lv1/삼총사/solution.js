// 조합과 관련된 문제로, 3개 원소를 뽑아서 더하여 0이 되는 조합을 찾는 것이 목표이다.
function solution(number) {
    let answer = 0;

    for (let i=0;i<number.length;i++) {
        for (let j=i+1;j<number.length;j++) {
            for (let k=j+1;k<number.length;k++) {
                if ((number[i] + number[j] + number[k]) === 0) {
                    answer += 1;
                }
            }
        }
    }

    return answer;
}