function solution(k, score) {
  let tempArr = [];
  let result = [];
  score.map(el => {
      tempArr.push(el);
      tempArr.sort((a, b) => b - a);
      if (tempArr.length > k) tempArr.pop();
      result.push(tempArr[tempArr.length - 1]);
  });
  return result;
}