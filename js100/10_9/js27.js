let name = prompt("이름 입력 : ").split(' ');
let score = prompt("점수 입력 : ").split(' ');
const obj = {};

for(let i=0; i<2; i++) {
    obj[name[i]] = parseInt(score[i], 10);
}

console.log(obj);