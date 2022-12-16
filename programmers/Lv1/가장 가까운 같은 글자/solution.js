// 뒤에서부터 index를 찾는 lastIndexOf 메소드 기억하기
function solution(s) {
    let result = [-1];

    s = s.split('');
    for (let i = 1; i < s.length; i++) {
        if (s.slice(0, i).includes(s[i])) {
            result.push(i - s.slice(0, i).lastIndexOf(s[i]));
        } else {
            result.push(-1);
        }
    }
    return result;
}
