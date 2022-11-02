function solution(common) {
    if (common[2] - common[1] === common[1] - common[0]) {
        let diff = common[2] - common[1];
        return common[common.length - 1] + diff;
    } else {
        let mul = common[2] / common[1];
        return common[common.length - 1] * mul;
    }
}