function solution(n) {
  let sqrt = 0;
  for (let i = 1; ; i++) {
      if (i * i === n) {
          sqrt = i;
          break;
      }
      if (i * i > n) {
          return -1;
      }
  }
  return (sqrt + 1) ** 2;
}