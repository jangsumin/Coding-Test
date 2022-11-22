// 의사 코드 작성
// d 배열에 주어진 것들을 오름차순 정렬
// d 배열을 앞에서부터 더해가면서 budget 값을 넘는 순간 result 반환 

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let sum = 0;
  let answer = d.length;
  for (let i = 0; i < d.length; i++) {
      sum += d[i];
      if (sum > budget) {
          answer = i;
          break;
      }
  }
  return answer;
}