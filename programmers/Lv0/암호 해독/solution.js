function solution(cipher, code) {
  const answer = [];
  cipher.split("").map((el, idx) => {
      if ((idx + 1) % code === 0) answer.push(el);
  });
  return answer.join("");
}