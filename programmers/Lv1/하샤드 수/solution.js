function solution(x) {
  const result = x % x.toString().split("").reduce((a, b) => a + parseInt(b), 0) === 0 ? true : false;
  return result;
}