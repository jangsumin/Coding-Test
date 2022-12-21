function solution(s) {
    let answer = 0;
    const temp = [];
    for (let i = 0; i < s.length; i++) {
        if (temp[temp.length - 1] !== s[i] || i === 0) temp.push(s[i]);
        else if (temp[temp.length - 1] === s[i]) temp.pop();
    }
    if (temp.length === 0) answer = 1;
    return answer;
}
