// 효율성 테스트 통과 x -> 스택을 사용해서 통과할 수 없음.

/*
function solution(s){
    let stack = [];
    stack.push(s[0]);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ")" && stack[stack.length - 1] === "(") stack.pop();
        else stack.push(s[i]);
    }
    return stack.length === 0 ? true : false;
}
*/

// if문 두 개 사용하는 것보다 삼항 연산자를 사용하는 것이 훨씬 빠르다.
// if문 두 개 사용했을 때 통과못했지만, 삼항 연산자를 사용했을 때 통과했음.
// for of 문 보다 for 문을 사용하는 것이 훨씬 더 효율성이 높다.

function solution(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? (cnt += 1) : (cnt -= 1);
        if (cnt < 0) return false;
    }
    return cnt === 0 ? true : false;
}
