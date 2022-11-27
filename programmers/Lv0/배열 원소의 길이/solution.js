function solution(strlist) {
  let answer = [];
  strlist.forEach(el => {
     answer.push(el.length); 
  });
  return answer;
}