// 의사 코드 작성
// 1. discount 순회
// 2. 순회하는 동안 10개씩 계속 확인해서 want에 있는 항목이 number 만큼 있는지 확인
// 2-1. 10개씩 배열로 만들기
// 2-2. 2-1에서 만든 배열의 원소를 순회하면서 개수가 number를 넘는지 확인
// 2-3. 안넘으면 break하고, 다음 10개 확인
// 3. 있으면 카운트 하기, 카운트는 처음에 0으로 초기화 해놓고 마지막에 return

function solution(want, number, discount) {
  let cnt = 0;
  for (let i = 0; i < discount.length - 9; i++) {
      let discountArr = discount.slice(i, i + 10);
      let isPossible = true;
      want.map((wantEl, idx) => {
          let eachCnt = 0;
          discountArr.map(discountEl => {
              if (wantEl === discountEl) eachCnt += 1;
          });
          if (eachCnt < number[idx]) isPossible = false; 
      });
      if (isPossible) cnt += 1; 
  }
  return cnt;
}