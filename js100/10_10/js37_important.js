let inputName = prompt("이름을 입력하세요 : ").split(' ');
let result = {};
let win = '';

for (let i in inputName) {
    let val = inputName[i];
    result[val] = result[val] === undefined ? 1 : result[val] + 1;
}

win = Object.keys(result).reduce(function(a, b) {
    return result[a] > result[b] ? a : b
});

console.log(`${win}(이)가 총 ${result[win]}표로 반장이 되었습니다.`);