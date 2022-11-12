function solution(quiz) {
  let result = [];
  
  quiz.forEach(equation => {
      equation = equation.split(" ");
      if (equation[1] == '+') {
          if (parseInt(equation[0]) + parseInt(equation[2]) === parseInt(equation[4])) result.push('O');
          else result.push('X');
      }
      if (equation[1] == '-') {
          if (parseInt(equation[0]) - parseInt(equation[2]) === parseInt(equation[4])) result.push('O');
          else result.push('X');
      }
  });
  
  return result;
}