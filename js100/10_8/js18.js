let score = prompt("입력 : ").split(' ');

// let res = 0;

// for (let i=0;i<score.length;i++) {
//     res += parseInt(score[i]);
// }

const res = score.reduce((num1, num2) => parseInt(num1) + parseInt(num2), 0);

console.log(Math.floor(res / score.length));