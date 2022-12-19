function solution(n) {
    let result = 1;
    let i = 1;
    while (i < Math.floor(n / 2) + 1) {
        let sum = 0;
        for (let start = i; sum < n; start++) {
            sum += start;
        }
        if (sum === n) {
            result += 1;
        }
        i++;
    }
    return result;
}
