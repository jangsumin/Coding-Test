function solution(brown, yellow) {
    let sum = (brown - 4) / 2;
    let result = [];
    for (let horizontal = 1; horizontal <= Math.floor(sum / 2); horizontal++) {
        let vertical = sum - horizontal;
        if (vertical * horizontal === yellow) result = [horizontal + 2, vertical + 2];
    }
    return result.sort((a, b) => b - a);
}
