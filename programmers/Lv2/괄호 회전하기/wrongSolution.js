// 아래의 함수는 14개의 테스트 케이스 중 하나를 통과하지 못했다.
// 반례로 '[(])' 의 문자열 입력값을 예상하고 있다.

function solution(s) {
  const len = s.length;
  let answer = 0;
  s = s.repeat(2);
  for (let i = 0; i < len; i++) {
      if (isCorrect(s.slice(i, i + len))) answer += 1;
  }
  return answer;
}

function isCorrect(s) {
  let small = 0;
  let middle = 0;
  let large = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') small += 1;
      if (s[i] === ')') small -= 1;
      if (s[i] === '{') middle += 1;
      if (s[i] === '}') middle -= 1;
      if (s[i] === '[') large += 1;
      if (s[i] === ']') large -= 1;
      if (small < 0 || middle < 0 || large < 0) return false;
  }
  if (small !== 0 || middle !== 0 || large !== 0) return false;
  return true;
}