let inputScore = prompt("영어 점수를 입력하세요 : ").split(' ').map(function(n) {
    return parseInt(n, 10);
});

inputScore.sort(function(a, b) {
    return a - b;
});

// 객체는 안에 순서가 없어서 객체로 풀면 안될 것 같다.
/*
let score_obj = {};
for(let i in inputScore) {
    let val = inputScore[i];
    score_obj[val] = score_obj[val] === undefined ? 1 : score_obj[val] + 1;
}
*/

let cnt = 0;
let temp = [];
while (temp.length < 3) {
    let a = inputScore.pop();
    if (!inputScore.includes(a)) {
        temp.push(a);
    }
    cnt++;
}

console.log(cnt);

// 마지막에 새로운 temp 배열 생성해서 밀어넣는 식으로 코드 구현하는거
// 도저히 생각이 나지 않아서 참고했다.
// 다시 봐야 할 필요가 있다.