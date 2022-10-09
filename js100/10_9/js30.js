const inputStr = prompt("문자열을 입력해 주세요 : ");
const toFindStr = prompt("찾으려고 하는 문자열을 입력해 주세요 : ");

console.log(inputStr.indexOf(toFindStr));

// 메소드 안쓰고 구현하려면, 
// 일단 찾으려고 하는 문쟈열이 본 문자열보다 길면 false 반환.
// 본 문자열 탐색하면서 toFindStr 문자열의 첫 문자 찾으면 그 때부터 비교 시작.
// 비교하다가 다르면 다시 본 문자열 이어서 탐색.
// 만약 같으면 저장해놨던 본 문자열의 인덱스값을 반환.