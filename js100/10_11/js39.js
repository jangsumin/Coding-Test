let wrong_str = prompt("틀린 문장을 입력하시오 : ").split('');

for (let i in wrong_str) {
    if (wrong_str[i] === "q") {
        wrong_str[i] = "e";
    }
}

console.log(wrong_str.join(''));

// replace는 문자열 내에 가장 첫번째 케이스에 대해서만 바꿔주고,
// replaceAll은 전부 다 바꿔준다.
/*
let wrong_str = prompt("틀린 문장을 입력하시오 : ");

console.log(wrong_str.replaceAll("q", "e"));
*/

// 교재에서 푼 내용은 되게 신기하다.
// 재사용성이 매우 좋을 것 같으나 이미 Array.prototype에 있는 빌트인 메서드를 쓰면 될 것 같다.
// replaceAll 이라는 함수를 직접 선언했는데 그 방법은 다음과 같다.
/*
const word = prompt("틀린 문장을 입력하시오 : ");

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, "q", "e"));
*/

// 정규 표현식은 다음에!