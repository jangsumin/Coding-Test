function solution(n) {
  let cnt = 0;
  while (n) {
      if (findDivider(n) >= 3) cnt += 1;
      n--;
  }
  return cnt;
}

function findDivider(n) {
  let cnt = 1;
  for(let i = 2; i <= n; i++) {
      if (n % i === 0) cnt += 1;
  }
  return cnt;
}