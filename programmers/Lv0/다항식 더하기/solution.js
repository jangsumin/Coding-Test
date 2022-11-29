function solution(polynomial) {
  let answer = [0, 0];
  let list = polynomial.split(" + ");
  list.map(el => {
      if (el === "x") answer[0] += 1;
      else if (el.includes("x")) answer[0] += parseInt(el);
      else answer[1] += parseInt(el);
  });
  if (answer[0] === 1 && answer[1] === 0) return "x";
  if (answer[0] === 1 && answer[1] !== 0) return `x + ${answer[1]}`
  if (answer[0] === 0) return `${answer[1]}`;
  if (answer[1] === 0) return `${answer[0]}x`;
  return `${answer[0]}x + ${answer[1]}`;
}