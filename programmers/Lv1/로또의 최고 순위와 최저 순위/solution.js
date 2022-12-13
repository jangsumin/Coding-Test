function solution(lottos, win_nums) {
    let wrong_cnt = 0;
    let zero_cnt = 0;
    lottos.map((num) => {
        if (num !== 0) {
            if (!win_nums.includes(num)) wrong_cnt += 1;
        } else {
            zero_cnt += 1;
        }
    });
    if (zero_cnt >= 5) {
        return [wrong_cnt + 1, 6];
    } else if (wrong_cnt >= 5) {
        return [6, 6];
    } else {
        return [wrong_cnt + 1, wrong_cnt + zero_cnt + 1];
    }
}
