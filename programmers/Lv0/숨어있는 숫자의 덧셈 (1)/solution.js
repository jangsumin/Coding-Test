function solution(my_string) {
  return my_string.split("").filter(x => parseInt(x) >= 1 && parseInt(x) <= 9).reduce((acc, cur) => acc + parseInt(cur), 0);
}