// 풀다가 알게 된 사실은
// console.log([8,2,6] === [8,2,6]) 의 결과는 false 다.

function solution(dots) {
  const leanArr = [];
  for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
          const lean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
          if (leanArr.includes(lean)) return 1;
          leanArr.push(lean);
      }
  }
  return 0;
}