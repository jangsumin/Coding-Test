function solution(food) {
  let answer = '';
  
  for (let i=1;i<food.length;i++) {
      if (food[i] % 2 == 1) {
          answer += String(i).repeat((food[i] - 1) / 2);
      } else {
          answer += String(i).repeat(food[i] / 2);
      }
  }
  
  answer += '0' + answer.split("").reverse().join("");
  
  return answer;
}