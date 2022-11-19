function solution(number, limit, power) {
  const dividerArray = [];
  for (let i = 1; i <= number; i++) {
      dividerArray.push(countDivider(i));
  }
  return dividerArray.map(divider => divider > limit ? divider = power : divider).reduce((a, b) => a + b, 0);
}

function countDivider(number) {
  let count = 1;
  if (number === 1) return count;
  else {
      for (let i = 1; i <= Math.floor(number / 2); i++) {
          number % i === 0 ? count += 1 : count += 0;
      }
  }
  return count;
}