function solution(n) {
  const saveObj = {};
  while (n > 1) {
      for (let i = 2; ; i++) {
          if (n % i === 0) {
              saveObj[i] = saveObj[i] === undefined ? 1 : saveObj[i] += 1;
              n /= i;
              break;
          }
      }
  }
  return Object.keys(saveObj).map(el => parseInt(el));
}