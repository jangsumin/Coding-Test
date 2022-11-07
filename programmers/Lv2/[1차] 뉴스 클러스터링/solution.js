// str1, str2 모두 영문자 대문자로 변환.
// str1, str2 순회 돌면서 2개씩 다 잘라서 새로운 배열에 넣기.
// 영문자 아닌 문자 포함하면 배열에서 빼기.
// 교집합 개수 구하기 : 크기가 작은 배열에 대해 같은 게 얼마나 나오는지 확인하기.
// 합집합 개수 구하기 : 크기가 작은 배열 크기 + 크기가 큰 배열 크기 - 교집합 개수

function solution(str1, str2) {
  let str1Array = [];
  let str2Array = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  for (let i=0;i<str1.length-1;i++) {
      str1Array.push(str1[i] + str1[i + 1]);
  }
  for (let i=0;i<str2.length-1;i++) {
      str2Array.push(str2[i] + str2[i + 1]);
  }
  
  let deletedArr1 = [];
  let deletedArr2 = [];
  
  str1Array.map(str => {
      if(str.match(/[a-z][a-z]/)) {
          deletedArr1.push(str);
      }  
  });
  
  str2Array.map(str => {
      if(str.match(/[a-z][a-z]/)) {
          deletedArr2.push(str);
      }  
  });
  
  let sameCnt = 0;
  
  for (let i=0;i<deletedArr1.length;i++) {
      for (let j=0;j<deletedArr2.length;j++) {
          if (deletedArr1[i] === deletedArr2[j]) {
              sameCnt += 1;
              deletedArr2.splice(j, 1);
              break;
          }
      }
  }
  
  // console.log(deletedArr1);
  // console.log(deletedArr2);
  // console.log(sameCnt);
  
  if (deletedArr1.length === 0 && deletedArr2.length === 0) return 65536;
  else return Math.floor(sameCnt / (deletedArr1.length + deletedArr2.length) * 65536);
}