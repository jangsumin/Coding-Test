function solution(num, total) {
  if (num % 2 === 0) {
      let arr1 = Array(num).fill(Math.floor(total / num) - (num / 2 - 1));
      arr1 = arr1.map((v, i) => v = v + i);
      return arr1;
  }
  if (num % 2 === 1) {
      let arr2 = Array(num).fill((total / num) - Math.floor(num / 2));
      arr2 = arr2.map((v, i) => v = v + i);
      return arr2;
  }
}