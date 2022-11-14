function solution(array) {
  let resultArr = {};
  let result = 0;
  let cnt = 0;
  
  let set = new Set(array);
  for (const i of set) {
      resultArr[i] = 0;
      for (const j of array) {
          if (i === j) resultArr[i] += 1;
      }
  }
  
  for (const i in resultArr) {
      if (resultArr[i] === Math.max(...Object.values(resultArr))) {
          cnt += 1;
          result = i;
      }
  }
  
  if (cnt !== 1) return -1;
  else return parseInt(result); 
}