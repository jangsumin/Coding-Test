function solution(s) {
    let s_arr = s.split('');
    let answer = 0;
    while (s_arr.length > 0) {
        let char = s_arr[0];
        let countYes = 0;
        let countNo = 0;
        let idx = 0;
        for (let i = 0; i < s_arr.length; i++) {
            if (s_arr[i] === char) countYes += 1;
            if (s_arr[i] !== char) countNo += 1;
            if (countYes === countNo) {
                idx = i;
                break;
            }
            if (i === s_arr.length - 1) {
                idx = i;
            }
        }
        s_arr = s_arr.slice(idx + 1, s_arr.length);
        answer += 1;
    }
    return answer;
}
