function solution(s) {
  let halfIdx = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(halfIdx - 1, halfIdx + 1) : s.slice(halfIdx, halfIdx + 1);
}