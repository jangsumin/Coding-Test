function solution(array) {
  let answer = 0;
  let str = array.join("").split("");
  
  str.map(el => {
      if (el === "7") answer += 1;
  })
  
  return answer;
}

// 선택적 체인링 사용
// return array.join("").match(/7/g)?.length || 0;