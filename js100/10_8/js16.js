// 문자열 입력 후에 거꾸로 뒤집어서 출력
let inputStr = prompt("입력 : ");

let changedStr = [...inputStr].reverse().join('');
console.log(changedStr);