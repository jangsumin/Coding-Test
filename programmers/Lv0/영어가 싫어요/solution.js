function solution(numbers) {
  const obj = {
      "zero": 0,
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
      "five": 5,
      "six": 6,
      "seven": 7,
      "eight": 8,
      "nine": 9
  }
  let answer = numbers;
  for (const i in obj) {
      answer = answer.replaceAll(i, obj[i]);
  }
  return parseInt(answer);
}