function solution(n) {
  var answer = 1;
  for (let i=3;i<=n;i+=2) {
      var cnt = 0;
      for (let j=2;j<=Math.sqrt(i);j+=1) {
          if (i % j == 0) {
              cnt++;
              break;
          }
      }
      if (cnt == 0) {
          answer += 1;
      }
  }
  return answer;
}