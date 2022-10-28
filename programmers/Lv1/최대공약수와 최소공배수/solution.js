// 어제 페어프로그래밍 복습 차원 문제 풀이

function solution(n, m) {
    let answer = [];
    
    let gcd = 0;
    let lcm = 0;
    
    for (let i=1;i<=Math.min(n, m);i++) {
        if (n % i === 0 && m % i === 0) gcd = i;
    }
    
    for (let i=Math.max(n, m);i<=n * m;i++) {
        if (i % n === 0 && i % m === 0) {
            lcm = i;
            break;
        }
    }
    
    answer.push(gcd, lcm);
    
    return answer;
}