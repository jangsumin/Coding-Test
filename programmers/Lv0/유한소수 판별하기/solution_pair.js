// 의사 코드 작성
// a, b의 약수를 찾아야겠다!
// b의 약수를 구한 다음에, 2, 5가 아닌 숫자가 나왔을 때, 그걸 a로 나누면 어떨까요?

// a랑 b랑 크기 비교
// 작은 거를 기준으로 1부터 7까지 순회를 하면서
// b가 마지막으로 나눠떨어지는 순간의 값을 저장한다. 

function solution(a, b) {
    let answer = 0;
    let divider = 0;
    
    if (a % b === 0) return 1;
    
    if (a > b) {
        for (let i=1;i<=b;i++) {
            if (a % i == 0 && b % i == 0) divider = i; 
        }
        b = b / divider;
        while (b % 2 === 0) {
            b /= 2;
        }
        while (b % 5 === 0) {
            b /= 5;
        }
        if(b === 1) return 1;
        else return 2;
    }
    else {
        for (let i=1;i<=a;i++) {
            if (a % i == 0 && b % i == 0) divider = i; 
        }
        b = b / divider;
        while (b % 2 === 0) {
            b /= 2;
        }
        while (b % 5 === 0) {
            b /= 5;
        }
        if(b === 1) return 1;
        else return 2;
    } 
}