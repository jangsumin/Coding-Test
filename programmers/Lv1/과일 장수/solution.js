// 오름차순 정렬
// m개 만큼 뒤에서 뽑기
// 뽑은 것을 바탕으로 가격 계산
// 남은 것이 m개보다 크면 또 뽑고 계산 한 값 누적

function solution(k, m, score) {
  let price = 0;
  score.sort((a, b) => a - b);
  while (score.length >= m) {
      const temp = [];
      for (let i = 0; i < m; i++) {
          temp.push(score.pop());
      }
      price += Math.min(...temp) * m;
  }
  return price;
}