// 굳이 slice 메서드를 활용하기 위해, 기존의 n차원 배열을 구현할 필요가 없음.

function solution(n, left, right) {
    let arr = [];
    for (let i = left; i <= right; i++) {
        if (Math.floor(i / n) >= i % n) arr.push(Math.floor(i / n) + 1);
        else arr.push((i % n) + 1);
    }
    return arr;
}
