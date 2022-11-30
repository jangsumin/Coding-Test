function solution(words, queries) {
  let answer = Array(queries.length).fill(0);
  words.map(word => {
    queries.map((query, idx) => {
      if (query.length === word.length) {
        if(isMatch(word, query)) answer[idx] += 1;
      }
    });
  });
  return answer;
}

function isMatch(word, query){
  let result = true;
  for(let i = 0; i < query.length; i++){
      if(query[i] !== '?'){
          if(query[i] !== word[i]){
              result = false;
              break;
          }
      }
  }
  return result;
}