// 장군 개미 공격력 : 5
// 병정 개미 공격력 : 3
// 일개미 공격력 : 1
// 최대한 적은 수의 개미를 데려가는 것이 목표
function solution(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3) / 1; 
}

console.log(solution(23)) // 5