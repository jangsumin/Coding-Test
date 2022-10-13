// prompt로 입력되는 것은 무조건 문자열인데, 이를 number 형변환하고,
// toString(2) 메서드를 사용하면 2진수로 바꾸어줌.
// toString(16) 이라면 16진수로 바꾸어줌.
/*
let inputNum = parseInt(prompt("숫자를 입력하시오 : "), 10);

console.log(inputNum.toString(2));
*/

// toString 메서드 안쓰고 구현하기
let inputNum = parseInt(prompt("숫자를 입력하시오 : "), 10);
let res = [];

while (inputNum) {
    res.push(inputNum % 2);
    inputNum = Math.floor(inputNum / 2);
}

res.reverse();

console.log(res.join(""));