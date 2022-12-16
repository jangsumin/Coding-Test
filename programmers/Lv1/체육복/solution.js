function solution(n, lost, reserve) {
    let arr = Array(n).fill(1);
    for (let i = 0; i < lost.length; i++) {
        arr[lost[i] - 1] -= 1;
    }
    for (let i = 0; i < reserve.length; i++) {
        arr[reserve[i] - 1] += 1;
    }
    // console.log(arr);
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            if (arr[i - 1] === 2) {
                arr[i - 1] -= 1;
                arr[i] += 1;
            } else if (arr[i + 1] === 2) {
                arr[i + 1] -= 1;
                arr[i] += 1;
            }
        }
    }
    return n - arr.filter((x) => x === 0).length;
}
