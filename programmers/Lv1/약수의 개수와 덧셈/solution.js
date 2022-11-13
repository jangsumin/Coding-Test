function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
      let divideNum = 1;
      for (let j = 2; j <= i; j++) {
          if (i % j === 0) divideNum += 1;
      }
      if (divideNum % 2 === 0) result += i;
      else result -= i;
  }
  
  return result;
}