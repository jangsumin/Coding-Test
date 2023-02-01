// 메인 컨테이너는 큐
// 보조 컨테이너는 스택

function solution(order) {
  let support = [];
  let idx = 0;
  let answer = 0;

  for (let i = 1; i <= order.length; i++) {
      if (order[idx] !== i) support.push(i);
      else {
          idx += 1;
          answer += 1;
      }

      while (support.length && support[support.length - 1] === order[idx]) {
          support.pop();
          idx += 1;
          answer += 1;
      }
  }

  return answer;
}