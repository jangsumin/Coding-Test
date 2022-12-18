function solution(s) {
    let cnt = 0;
    let zero = 0;
    while (s !== '1') {
        zero += s.split('').filter((x) => x === '0').length;
        s = s
            .split('')
            .filter((x) => x === '1')
            .length.toString(2);
        cnt += 1;
    }
    return [cnt, zero];
}
