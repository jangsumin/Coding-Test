// 내가 푼 풀이는 for 문이 두 번이나 돌아가므로 비효율적이다.
// let restrict = prompt('제한 무게를 입력하시오 : ');
// let n = prompt('함께한 친구들의 수를 입력하시오 : ');
// let arr = [];
// let res = 0;
// let sum = 0;

// for (let i=1; i<=n; i++) {
//     arr.push(parseInt(prompt('친구의 몸무게를 입력하시오 : '), 10));
// }

// for (let i=0; i<n; i++) {
//     sum += arr[i];
//     if (sum > restrict) {
//         res = i - 1;
//         break;
//     }
// }

// console.log(res);

let total = 0;
let cnt = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i=1; i<=n; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){
		cnt = i;
  }
}

console.log(cnt);