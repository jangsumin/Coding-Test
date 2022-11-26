// 시간 초과 발생한 코드
function solution(id_list, report, k) {
  const user = {};
  const badUser = {};
  const result = [];
  id_list.map(id => {
      user[id] = [];
      badUser[id] = 0;
  });
  
  let newReport = new Set(report);
  newReport = [...newReport];
  
  newReport.map(content => {
      user[content.split(" ")[0]].push(content.split(" ")[1]);
      badUser[content.split(" ")[1]] += 1;
  });
  
  Object.values(user).map(li => {
      let resultCnt = 0;
      let arr = [];
      li = new Set(li);
      arr.push(...li);
      Object.values(badUser).map((cnt, idx) => {
          if (cnt >= k) {
              if (arr.includes(Object.keys(badUser)[idx])) resultCnt += 1;
          }
      });
      result.push(resultCnt);
  });
  
  return result;
}

