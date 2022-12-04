function solution(my_string) {
  let set = new Set(my_string.split(""));
  return [...set].join("");
}