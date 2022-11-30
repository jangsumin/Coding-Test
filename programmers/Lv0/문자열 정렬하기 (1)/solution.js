function solution(my_string) {
  return my_string.replace(/[a-z]/g, '').split("").sort().map(el => parseInt(el));
}