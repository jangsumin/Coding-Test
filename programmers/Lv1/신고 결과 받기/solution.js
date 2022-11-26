// 알게 된 점
// 1. Object 프로토타입의 메서드를 활용하는 것은 시간 복잡도가 매우 증가한다.
// 2. forEach, map 메서드를 사용하는 것보다 순수 for문을 사용하는 것이 시간적으로 이득이 있다.

function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0);
  const warnedUser = {};
  id_list.map(list => {
      warnedUser[list] = [];
  });
  
  report.map(list => {
      const [user, badUser] = list.split(" ");
      if(!warnedUser[badUser].includes(user)) warnedUser[badUser].push(user);
  });
  
  for (const key in warnedUser) {
      if (warnedUser[key].length >= k) {
          warnedUser[key].map(v => answer[id_list.indexOf(v)] += 1);
      }
  }
  
  return answer;
}