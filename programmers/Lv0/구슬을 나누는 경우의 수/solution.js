function solution(balls, share) {
  return factorial(balls, share) / factorial(share, share);
}

function factorial(num, n) {
  let value = 1;
  while (n--) {
      value *= num--;
  }
  return value;
}