function solution(my_string, letter) {
  return my_string.split("").map(str => str === letter ? "" : str).join("");
}

/*
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}
*/