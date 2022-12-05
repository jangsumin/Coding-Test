function solution(spell, dic) {
  let answer = 2;
  dic.map(word => {
      if (word.split("").sort().join("") === spell.sort().join("")) answer = 1;
  });
  return answer;
}