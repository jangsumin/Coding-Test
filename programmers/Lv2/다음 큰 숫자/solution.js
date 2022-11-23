// 의사 코드 작성
// 1. 10진수인 n을 2진수로 변환
// 2. 그 때의 1의 개수를 확인하기
// 3. 1과 2의 과정을 함수로 만들기
// 4. n보다 큰 수를 순차적으로 2진수로 변환하면서 1의 개수가 같으면 해당하는 수를 반환 

function solution(n) {
  const countOne = countOneInBinary(n);
  while (n) {
      if (countOne === countOneInBinary(n + 1)) return n + 1;
      n += 1;
  }
}

function countOneInBinary(num) {
  const binary = num.toString(2);
  let cnt = 0;
  binary.split("").map(el => el === "1" ? cnt += 1 : cnt += 0);
  return cnt;
}