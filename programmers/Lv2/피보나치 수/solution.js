// 재귀함수를 사용해서 피보나치 수열 관련 문제를 해결하는 것은
// 많은 분기를 일으키기 때문에 Call Stack Error 가 발생하고,
// 런타임 에러도 발생한다.
// 단순 반복문을 활용하여 문제를 풀어야 하고, 1234567을 나누게
// 하는 것은 안전한 정수 표현의 의도인 것 같다.

function solution(n) {
    let array = [0, 1];
    
    for(let i=2;i<=n;i++) {
        array[i] = (array[i - 1] + array[i - 2]) % 1234567;
    }
    
    return array[n];
}

// 재귀함수을 사용한 문제 해결 - 통과할 수 없음.
/*
function solution(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return (solution(n - 1) + solution(n - 2)) % 1234567;
    }
}
*/
