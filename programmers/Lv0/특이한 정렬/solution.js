function solution(numlist, n) {
    numlist.sort((a, b) => {
        const a_diff = Math.abs(a - n);
        const b_diff = Math.abs(b - n);
        
        if (a_diff === b_diff) {
            return b - a;
        }
        
        return a_diff - b_diff;
    });
    
    return numlist;
}