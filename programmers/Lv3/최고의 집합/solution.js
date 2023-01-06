function solution(n, s) {
  if (s < n) return [-1];
  
  let arr = new Array(n).fill(Math.floor(s / n));
  for (let i = 0; i < s % n; i++) {
      arr[i] += 1;
  }
  return arr.reverse();
}