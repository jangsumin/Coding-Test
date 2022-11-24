function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((v, i) => {
      if (signs[i]) answer += v;
      if (!signs[i]) answer -= v;
  });
  return answer;
}