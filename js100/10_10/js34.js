// 입력된 숫자 배열이 이미 정렬된 형태인지 확인하고 YES, NO 반환하기. 
let inputTall = prompt("반 학생들의 키를 입력하세요 : ").split(' ');

let result = 'YES';

for (let i=0;i<inputTall.length-1;i++) {
    if (parseInt(inputTall[i]) <= parseInt(inputTall[i + 1])) {
        continue;
    } else {
        result = 'NO';
        break;
    }
}

console.log(result);

// compare 함수를 사용하기.
// let unsorted = prompt('반 학생들의 키를 입력하세요 : ');
// let sorted = '';

// sorted = unsorted.split(' ').sort(function(a, b) {
//     return a - b;
// }).join(' ');

// if (unsorted === sorted) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }