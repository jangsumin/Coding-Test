function solution(s1, s2) {
  let cnt = 0;
  s1.map(el => s2.includes(el) ? cnt += 1 : cnt += 0);
  return cnt;
}