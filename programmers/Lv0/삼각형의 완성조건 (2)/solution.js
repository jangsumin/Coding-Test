// 의사 코드 작성
// 가장 긴변이 sides의 원소일 때
// 가장 긴변이 주어지지 않았을 때
// 이 두 가지 경우를 모두 합쳐서 한 번의 반복문 안에서 결과 도출

function solution(sides) {
    let answer = [];
    
    for (let i=Math.max(...sides)-Math.min(...sides)+1;i<Math.max(...sides)+Math.min(...sides);i++) {
        answer.push(i);
    }
    
    return answer.length;
}