function solution(scores) {
    let rank = 1;
    const current = scores[0];
    
    scores.sort((a, b) => {
        if (a[0] !== b[0]) return b[0] - a[0];
        return a[1] - b[1];
    });
    
    let before = 0;
    for (const score of scores) {
        if (current[0] < score[0] && current[1] < score[1]) return -1;
        
        if (before <= score[1]) {
            if (current[0] + current[1] < score[0] + score[1]) rank++;
            before = score[1];
        }
    }
    
    return rank;
}
