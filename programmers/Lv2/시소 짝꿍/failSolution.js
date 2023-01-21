// 시간 초과 코드
function solution(weights) {
    let answer = 0;
    for (let i = 0; i < weights.length - 1; i++) {
        for (let j = i + 1; j < weights.length; j++) {
            let distance = 2;
            if (weights[i] === weights[j]) answer += 1;
            else {
                while (distance <= 4) {
                    if (
                        (weights[i] * distance) % weights[j] === 0 &&
                        (weights[i] * distance) / weights[j] >= 2 &&
                        (weights[i] * distance) / weights[j] <= 4
                    ) {
                        answer += 1;
                        break;
                    }
                    distance++;
                }
            }
        }
    }

    return answer;
}
