function solution(arr) {
    let answer = [];
    let temp = arr.sort((a, b) => a - b);
    let i = 2;
    while (i <= Math.max(...temp)) {
        let divideCnt = 0;
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] % i === 0) {
                temp[j] = temp[j] / i;
                divideCnt += 1;
            }
        }
        console.log(divideCnt);
        if (divideCnt >= 1) answer.push(i);
        if (divideCnt === 0) i++;
    }
    return answer.reduce((acc, cur) => acc * cur, 1);
}

// 유클리드 호제법으로도 해결할 수 있음.
// function nlcm(num) {
//     return num.reduce((a, b) => (a * b) / gcd(a, b));
// }

// function gcd(a, b) {
//     return a % b ? gcd(b, a % b) : b;
// }
