// 대문자 소문자 순으로 정렬함.

function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}