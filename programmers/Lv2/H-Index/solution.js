// 논문 인용 빈도를 판단하기 위한 척도로 H-Index 사용

function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) answer += 1;
    }
    return answer;
}
