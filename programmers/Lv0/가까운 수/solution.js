function solution(array, n) {
  const rankArr = [];
  array.sort((a, b) => a - b).map(el => {
      rankArr.push(Math.abs(el - n));
  });
  return array[rankArr.indexOf(Math.min(...rankArr))];
}