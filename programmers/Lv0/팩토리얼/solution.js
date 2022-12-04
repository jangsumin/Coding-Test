function solution(n) {
  let mul = 1;
  let i = 1;
  while (mul <= n) {
      mul *= i;
      i++;
  }
  return i - 2;
} 