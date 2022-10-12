// 소수 판별기 만들기
// 입력하는 숫자의 절반을 넘어서는 수는 굳이 생각할 필요 없음.
let num = prompt('숫자를 입력하세요 : ');

function findPrimeNum(num) {
    let i = 2;
    while (i <= Math.floor(num / 2)) {
        if (num % i === 0) {
            return "NO";
        }
        i++;
    }
    return "YES";
}

console.log(findPrimeNum(num));