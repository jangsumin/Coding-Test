function solution(my_string) {
  let resultArr = my_string.split("").map(alphabet => {
      if (alphabet >= 'a' && alphabet <= 'z') return alphabet.toUpperCase();
      if (alphabet >= 'A' && alphabet <= 'Z') return alphabet.toLowerCase();
  });
  return resultArr.join("");
}