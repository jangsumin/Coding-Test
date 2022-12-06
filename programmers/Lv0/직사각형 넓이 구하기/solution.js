function solution(dots) {
  const xArr = [];
  const yArr = [];
  dots.map(dot => {
      xArr.push(dot[0]);
      yArr.push(dot[1]);
  });
  return (Math.max(...xArr) - Math.min(...xArr)) * (Math.max(...yArr) - Math.min(...yArr)); 
}