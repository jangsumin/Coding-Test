// let inputNumArr = prompt("양의 정수를 입력하세요 : ").split('');

// 연습문제 풀면서 이미 봤던 문제이고, 아래는 첫번째 풀이
// console.log(inputNumArr.reduce((a, b) => a + parseInt(b, 10), 0));

// 두번째 풀이
/*
let res = 0;
for (i of inputNumArr) {
    res += parseInt(i, 10);
}
console.log(res);
*/

// 입력 받은 걸 바로 number로 형변환하고, 10으로 나누면서 계산하는 방법 구현.
// 세번째 풀이
let inputNum = parseInt(prompt("양의 정수를 입력하세요 : "), 10);
let res = 0;

while(inputNum){
    res += (inputNum % 10);
    inputNum = Math.floor(inputNum / 10);
}

console.log(res);