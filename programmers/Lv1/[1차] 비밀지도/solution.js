// 2진 변환 중에 앞에 1부터 시작한다는 점을 고려해서
// String.prototype의 메서드 padStart()를 쓸 수 있음.
function solution(n, arr1, arr2) {
  let resultArr = [];
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  for ([i, j] of zip(arr1, arr2)) {
    resultArr.push((i | j).toString(2).padStart(n, "0"));
  }
  
  resultArr = resultArr.map(el => el.replaceAll("1", "#").replaceAll("0", " "));
  
  return resultArr;
}