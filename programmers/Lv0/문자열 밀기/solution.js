function solution(A, B) {
  if (A === B) return 0;
  
  let cnt = 1;
  let len = A.length - 1;
  let newArr = A.split("");
  
  while (len--) {
      let lastWord = newArr.pop();
      newArr.unshift(lastWord);
      console.log(newArr);
      if (B === newArr.join("")) {
          return cnt; 
      }
      cnt += 1;
  }
  
  return -1;
}