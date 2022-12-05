function solution(s) {
  let result = "";
  const saveObj = {};
  s.split("").sort().map(el => saveObj[el] = saveObj[el] === undefined ? 1 : saveObj[el] += 1);
  for (let i in saveObj) {
      if (saveObj[i] === 1) result += i;
  }
  return result;
}