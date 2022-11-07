function solution(denum1, num1, denum2, num2) {
  let lcm = 0;
  
  for (let i=1;i<=num1*num2;i++) {
      if (i % num1 === 0 && i % num2 === 0) {
          lcm = i;
          break;
      }
  }
  
  let denumResult = (denum1 * (lcm / num1)) + (denum2 * (lcm / num2));
  let devide = 1;
  for (let i=2;i<=Math.min(denumResult, lcm);i++) {
      if (denumResult % i === 0 && lcm % i === 0) {
          devide = i;
      }
  }
  
  return [denumResult / devide, lcm / devide];
}