function solution(emergency) {
  let rank = {};
  let copy = [];
  emergency.forEach(el => copy.push(el));
  emergency.sort((a, b) => b - a);
  for (let i = 0; i < emergency.length; i++) {
      rank[emergency[i]] = emergency.indexOf(emergency[i]) + 1;
  }
  let answer = copy.map(el => {
      return rank[el];
  });
  return answer;
}

/*
function solution(emergency) {
  let sorted = emergency.slice().sort((a,b)=>b-a);
  return emergency.map(v=>sorted.indexOf(v)+1);
}
*/