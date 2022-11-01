// 밑의 문제 해결 방식이 논리는 맞는 것 같으나
// 시간 초과로 통과하지 못했음.

// function solution(X, Y) {
//     let result = [];
//     let cnt = 0;
    
//     for (let i=0; i<X.length; i++) {
//         if (Y.includes(X[i])) {
//             result.push(X[i]);
//             Y = Y.replace(X[i], "A");
//             cnt++;
//         }
//     }
    
//     if (result.length === 0) return "-1";
//     else if (result.join("") === "0".repeat(cnt)) return "0";
//     else {
//         return result.sort((a, b) => b - a).join("");
//     }
// }

// 아래 코드로 통과하였으나 특정의 5개의 테스트 케이스가
// 전부 3ms의 시간이 걸린 것으로 보아, X나 Y가 절대적으로
// 긴 문자열로 주어졌을 것이라 추측한다.

function solution(X, Y) {
    let result = '';
    X = X.split("");
    Y = Y.split("");
    
    for (let i=0; i<10; i++) {
        let cntX = X.filter(el => parseInt(el) === i).length;
        let cntY = Y.filter(el => parseInt(el) === i).length;
        result += String(i).repeat(Math.min(cntX, cntY));
    }
    
    // console.log(result);
    
    if (result === '') return "-1";
    else if (parseInt(result) === 0) return "0";
    else {
        return result.split("").sort((a, b) => b - a).join("");
    }
}