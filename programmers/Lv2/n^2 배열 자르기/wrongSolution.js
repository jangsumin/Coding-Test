// 1. core dumped 라는 오류를 직면한다.

function solution(n, left, right) {
    let arr = Array(n).fill(Array(n).fill(0));
    let temp = [];
    arr.map((row, rowIdx) => {
        row.map((el, columnIdx) => {
            if (rowIdx >= columnIdx) temp.push(rowIdx + 1);
            else temp.push(columnIdx + 1);
        });
    });
    return temp.slice(left, right + 1);
}

// 2. 이중 반복문을 제거하였음에도 불구하고, core dumped 발생

function solution(n, left, right) {
    let arr = Array(n ** 2).fill(0);
    arr = arr.map((el, idx) => {
        if (Math.floor(idx / n) >= idx % n) return Math.floor(idx / n) + 1;
        else return (idx % n) + 1;
    });
    return arr.slice(left, right + 1);
}
