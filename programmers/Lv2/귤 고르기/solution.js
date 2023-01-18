function solution(k, tangerine) {
    let answer = 0;
    let group = {};
    tangerine.map((size) => {
        group[size] === undefined ? (group[size] = 1) : (group[size] += 1);
    });

    // console.log(group);

    let sum = 0;
    Object.values(group)
        .sort((a, b) => b - a)
        .map((el, idx) => {
            sum += el;
            if (sum - el < k && sum >= k) answer = idx + 1;
        });

    return answer;
}
