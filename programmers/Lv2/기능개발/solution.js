function solution(progresses, speeds) {
    const answer = [];
    let cnt = 0;
    const days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
    let base = -1;
    for (let i = 0; i < days.length; i++) {
        if (days[i] > base) {
            cnt += 1;
            answer.push(cnt);
            base = days[i];
            cnt = 0;
        } else {
            cnt += 1;
        }

        if (i === days.length - 1) {
            cnt += 1;
            answer.push(cnt);
        }
    }
    answer.shift();
    return answer;
}
