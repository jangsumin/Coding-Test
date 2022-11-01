function solution(dartResult) {
  let divide = dartResult.match(/([0-9]|10)([SDT])([\*\#]?)/g);
  let result = 0;
  let add = [0, 0, 0];
  
  // console.log(divide);
  
  divide.map((el, idx) => {
      if (el[0] === "1" && el[1] === "0") add[idx] = 10;
      else add[idx] = el[0];
      for (let i in el) {
          if (el[i] === "S") add[idx] = add[idx] ** 1;
          if (el[i] === "D") add[idx] = add[idx] ** 2;
          if (el[i] === "T") add[idx] = add[idx] ** 3;
          if (el[i] === "#") add[idx] *= -1;
          if (el[i] === "*") {
                  add[idx] *= 2;
                  add[idx - 1] *= 2;
          }
      }
  });
  
  result += add.reduce((a, b) => a + b, 0);
  // console.log(add);
  return result;
}