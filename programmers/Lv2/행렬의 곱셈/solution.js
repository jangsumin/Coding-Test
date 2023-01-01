function solution(arr1, arr2) {
  const answer = [];
  const len = arr2[0].length;
  for (let i = 0; i < arr1.length; i++) {
      let temp = [];
      for (let j = 0; j < len; j++) {
          let sum = 0;
          for (let k = 0; k < arr2.length; k++) {
              sum += arr1[i][k] * arr2[k][j];
          }
          temp.push(sum);
      }
      answer.push(temp);
  }
  return answer;
}