function solution(age) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';
  age.toString().split("").map((idx) => answer += alphabet[parseInt(idx)]);
  return answer;
}