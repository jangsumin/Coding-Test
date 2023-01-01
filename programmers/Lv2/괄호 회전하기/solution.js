function solution(s) {
  let answer = 0;
  let str = s.repeat(2);
  for (let i = 0; i < s.length; i++) {
      const sliceStr = str.slice(i, i + s.length);
      const stack = [];
      for (let j = 0; j < sliceStr.length; j++) {
          if (sliceStr[j] === "(" || sliceStr[j] === "{" || sliceStr[j] === "[") stack.push(sliceStr[j]);
          if (sliceStr[j] === ")") {
              if (stack[stack.length - 1] === "(") stack.pop();
              else stack.push(sliceStr[j]);
          }
          if (sliceStr[j] === "}") {
              if (stack[stack.length - 1] === "{") stack.pop();
              else stack.push(sliceStr[j]);
          }
          if (sliceStr[j] === "]") {
              if (stack[stack.length - 1] === "[") stack.pop();
              else stack.push(sliceStr[j]);
          }
      }
      if (stack.length === 0) answer += 1;
  }
  return answer;
}
