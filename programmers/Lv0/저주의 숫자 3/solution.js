function solution(n) {
  const saveArr = [];
  let cnt = 0;
  let i = 1;
  while (true) {
      if (!i.toString().includes("3") && i % 3 !== 0) {
          saveArr.push(i);
          cnt++;
      }
      i++;
      if (cnt === 100) break;
  }
  return saveArr[n - 1];
}