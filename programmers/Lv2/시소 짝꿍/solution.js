function solution(weights) {
    let answer = 0;
    let result = new Map();

    function checkWeight(num, mul, div) {
        let check = result.has((num * mul) / div);
        if (check === true) return result.get((num * mul) / div);
        return 0;
    }

    weights.forEach((el) => {
        if (result.has(el)) result.set(el, result.get(el) + 1);
        else result.set(el, 1);
    });

    // console.log(result);

    weights.forEach((el) => {
        if (result.get(el) > 1) answer += result.get(el) - 1;
        answer += checkWeight(el, 2, 3);
        answer += checkWeight(el, 2, 4);
        answer += checkWeight(el, 3, 2);
        answer += checkWeight(el, 3, 4);
        answer += checkWeight(el, 4, 2);
        answer += checkWeight(el, 4, 3);
    });

    return answer / 2;
}
