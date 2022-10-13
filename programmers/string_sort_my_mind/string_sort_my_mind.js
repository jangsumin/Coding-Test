let strings = ['car', 'sun', 'bed'];

function solution(strings, n) {
    var answer = [];
    strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1;
        } else if (a[n] < b[n]) {
            return -1;
        } else {
            return a > b ? 1 : -1;
        }
    });
    return strings;
}

console.log(solution(strings, 1));