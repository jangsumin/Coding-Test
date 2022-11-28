function solution(lines) {
  let obj = {};
  let array = [];
  let answer = 0;
  lines.map(line => {
     for (let i = line[0]; i < line[1]; i++) {
         obj[i] = obj[i] === undefined ? 1 : obj[i] + 1;
     }
  });
  Object.entries(obj).sort((a, b) => a[0] - b[0]).map(el => {
      array.push(el[1]);
  });
  for (let i = 0; i < array.length; i++) {
      if (array[i] >= 2) answer += 1;
  }
  return answer;
}