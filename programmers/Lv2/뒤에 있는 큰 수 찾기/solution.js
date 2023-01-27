function solution(numbers) {
    let result = [];
    let stack = [];

    for (let i = 0; i < numbers.length; i++) {
        if (stack.length === 0 || numbers[i] < numbers[i - 1]) stack.push(i);
        else {
            while (stack.length !== 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
                result[stack.pop()] = numbers[i];
            }
            stack.push(i);
        }
    }

    while (stack.length !== 0) {
        result[stack.pop()] = -1;
    }

    // console.log(result);
    return result;
}
