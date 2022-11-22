function solution(arr) {
  if (arr.length === 1) return [-1];
  let minValue = Math.min(...arr);
  arr.forEach((v, i) => {
      if (v === minValue) arr.splice(i, 1);
  });
  return arr;
}