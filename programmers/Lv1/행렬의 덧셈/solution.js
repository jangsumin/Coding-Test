function solution(arr1, arr2) {
  let answer = [];
  for (let i in arr1) {
      let subAnswer = [];
      for (let j in arr1[i]) {
          subAnswer.push(arr1[i][j] + arr2[i][j]);
      }
      answer.push(subAnswer);
  }
  
  return answer;
}

/*
function solution(arr1, arr2) {
  return arr1.map((a1, i) => a1.map((a2, j) => a2 + arr2[i][j]));
}
*/
