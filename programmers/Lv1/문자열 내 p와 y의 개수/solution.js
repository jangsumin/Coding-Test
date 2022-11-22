function solution(s){
  let pCnt = 0;
  let yCnt = 0;
  s = s.toLowerCase();
  s.split("").map(word => {
      if (word === "p") pCnt += 1;
      if (word === "y") yCnt += 1;
  });
  return pCnt === yCnt ? true : false;
}