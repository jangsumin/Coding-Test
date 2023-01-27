// 시간 초과 코드
function solution(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        let isBreak = false;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] > numbers[i]) {
                result.push(numbers[j]);
                isBreak = true;
                break;
            }
        }
        if (!isBreak) result.push(-1);
    }
    result.push(-1);

    return result;
}
