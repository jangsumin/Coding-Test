// 별 찍기
// 답안에 for 문 세 개 들어감.
const n = prompt('숫자를 입력하세요 : ');
let str = "*";
let blank = " ";
let result = "";

for(let i=1;i<=5;i++) {
    result += blank.repeat(n - i) + str.repeat(2 * i - 1) +blank.repeat(n - i);
    result += '\n';
}

console.log(result);