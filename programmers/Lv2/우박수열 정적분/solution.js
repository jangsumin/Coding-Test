function solution(k, ranges) {
    let num = k;

    // 콜라츠 배열 만들기
    let CollatzResult = [];
    while (num !== 1) {
        CollatzResult.push(num);
        if (num % 2 === 0) num = num / 2;
        else num = num * 3 + 1;
    }
    CollatzResult.push(1);

    // 정적분하기
    let result = [];
    ranges.map((range) => {
        let [start, end] = range;
        if (start === CollatzResult.length + end - 1) result.push(0);
        else if (start > CollatzResult.length + end - 1) result.push(-1);
        else {
            let sum = 0;
            for (let i = start; i < CollatzResult.length + end - 1; i += 1) {
                sum += (CollatzResult[i] + CollatzResult[i + 1]) / 2;
            }
            result.push(sum);
        }
    });

    return result;
}
