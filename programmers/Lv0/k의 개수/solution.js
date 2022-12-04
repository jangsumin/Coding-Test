function solution(i, j, k) {
  let answer = 0;
  for (let cnt = i; cnt <= j; cnt++) {
      cnt.toString().split("").map(el => el.includes(k.toString()) ? answer += 1 : null);
  }
  return answer;
}