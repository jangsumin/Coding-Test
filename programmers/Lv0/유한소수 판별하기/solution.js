// gcd, 최대공약수 구하기!

function solution(a, b) {
    let divider = 0;
        
    for (let i=1;i<=Math.min(a, b);i++) {
        if (a % i == 0 && b % i == 0) divider = i; 
    }
    // console.log(divider);
    b = b / divider;
    while (b % 2 === 0) {
        b /= 2;
    }
    while (b % 5 === 0) {
        b /= 5;
    }
        
    if(b === 1) return 1;
    else return 2;
}