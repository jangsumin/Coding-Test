// 의사 코드 작성
// 1. words 순회
// 2. 1 내부에서 queries 순회
// 3. 길이가 같은 지 확인
// 4. ? 문자로 split을 하고, split을 통해 얻은 원소 중 알파벳이 있는 원소가 words의 각 원소에 포함되어 있는 지 확인

function solution(words, queries) {
  const answer = [];
  queries.map(query => {
      let cnt = 0;
      let toFindWord = query.split("?").find(key => key !== "");
      if (toFindWord === undefined) {
         toFindWord = ""; 
      }
      words.map(keyWord => {
          if ((keyWord.indexOf(toFindWord) === 0 || keyWord.slice(keyWord.length - toFindWord.length, keyWord.length) === toFindWord)
              && query.length === keyWord.length) cnt += 1;
      });
      answer.push(cnt);
  });
  return answer;
}