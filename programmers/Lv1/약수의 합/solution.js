function solution(n) {
    let sum = 0;
    for (let i=1;i<=Math.floor(n / 2);i++) {
        n % i === 0 ? sum += i : sum += 0; 
    }
    
    return sum + n;
}