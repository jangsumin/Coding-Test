// 최대한 새로운 반복문 형태 써보겠다고 다음과 같이 작성.
let numArr = [];
numArr.length = 20;
numArr.fill(0);

let arr = [];

numArr.forEach((v, i) => {
    arr.push(v + i + 1);
});

console.log(arr.join("").split("").reduce((a, b) => a + parseInt(b), 0)); // 출력 102.