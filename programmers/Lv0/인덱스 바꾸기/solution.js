function solution(my_string, num1, num2) {
  const save1 = my_string.split("").slice(num1, num1 + 1);
  const save2 = my_string.split("").slice(num2, num2 + 1);
  let result = my_string.split("");
  result.splice(num1, 1, save2);
  result.splice(num2, 1, save1);
  return result.flat().join("");
}