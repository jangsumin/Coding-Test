// 의사 코드 작성
// 2로 계속 나누었을 때 나머지가 1이 나오는 횟수를 구하면 된다

function solution(n) {
  let answer = 0;
  while (n > 1) {
      if (n % 2 === 1) answer += 1;
      n  = Math.floor(n / 2);
  }
  return answer + 1;
}