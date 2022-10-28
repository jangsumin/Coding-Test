// 인자 babbling 배열의 원소들이 각각 word 내의 단어를 빈 문자열로 대체하고 싶었으나,
// 서로 떨어져 있는 문자들이 다시 만나서 삭제되는 경우가 있어서
// 임의의 문자 k로 일단 대체한 뒤, 다시 빈 문자열로 대체하였다.

function solution(babbling) {
    let word = ["aya", "ye", "woo", "ma"];
    let temp = [];
    let answer = 0;
    
    babbling.map(el => {
      for (let i=0;i<word.length;i++) {
        el = el.replace(word[i], "k");
      }
      temp.push(el);
    });
  
    let arr = temp.map(el => el.replaceAll("k", ""));
  
    arr.forEach(el => {
      el === "" ? answer += 1 : answer += 0;
    })
    
    return answer;
}
