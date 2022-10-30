// 의사 코드를 작성하지 않으면
// 코드 풀이가 매우 어려워질 수 있다는 것을 깨달았다.

function solution(chicken) {
    let answer = 0;
    let rest = 0;
    while (chicken > 9) {
        rest = chicken % 10;
        chicken = Math.floor(chicken / 10);
        answer += chicken;
        chicken += rest;
    }
    
    return answer;
}