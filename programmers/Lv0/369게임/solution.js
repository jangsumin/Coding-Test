// 정규 표현식 실행 시간 에러
function solution(order) {
  // return order.toString().match(/[369]/g).length;
  let cnt = 0;
  order.toString().split("").map(num => {
     num === "3" ? cnt += 1 : num === "6" ? cnt += 1 : num === "9" ? cnt += 1 : cnt += 0; 
  });
  return cnt;
}