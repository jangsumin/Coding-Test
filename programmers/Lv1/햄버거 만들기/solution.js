// 위의 방법은 논리적으로 맞지만 시간초과가 발생하여 통과하지 못했다.
// 그 이유에 대해서는 알 수 없는 것이, replace() 라는 메서드의 내부 동작을 모르기 때문이다.
// 아래 방법 또한 시간이 적게 걸리는 것은 아니지만, 상대적으로
// 위의 solution 보다는 적게 걸린다.

// function solution(ingredient) {
//     let str = ingredient.join("");
//     let answer = 0;
    
//     while (str.includes("1231")) {
//       str = str.replace("1231", "");
//       answer += 1;
//     }
    
//     return answer;
// }

function solution(ingredient) {
    let answer = 0;
    
    for(let i=0;i<ingredient.length;i++) {
        if(ingredient.slice(i, i+4).join("") === "1231") {
            ingredient.splice(i, 4);
            i -= 3;
            answer += 1;
        }
    }
    
    return answer;
}