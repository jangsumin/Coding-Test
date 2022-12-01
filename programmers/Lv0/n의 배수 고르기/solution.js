function solution(n, numlist) {
  const result = [];
  numlist.map(num => {
      if (num % n === 0) result.push(num); 
  });
  return result;
}