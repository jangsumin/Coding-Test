function solution(n) {
  let result = 1;
  while (true) {
      if ((6 * result) % n === 0) return result;
      result += 1;
  }
}