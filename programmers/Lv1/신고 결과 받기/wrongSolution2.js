// 두 번째 시간 초과 발생
function solution(id_list, report, k) {
  let user = {};
  let warnedUser = {};
  let newReport = new Set(report);
  newReport = [...newReport];
  
  for (let i = 0; i < id_list.length; i++) {
      user[id_list[i]] = 0;
  }

  for (let i = 0; i < newReport.length; i++) {
      warnedUser[newReport[i].split(" ")[1]] = warnedUser[newReport[i].split(" ")[1]] === undefined ? 1 : warnedUser[newReport[i].split(" ")[1]] + 1;
  }
  
  for (let el of Object.entries(warnedUser)) {
      for (let el2 of newReport) {
          if (el[1] >= k && el[0] === el2.split(" ")[1]) user[el2.split(" ")[0]] += 1; 
      }
  }
  
  return Object.values(user);
}