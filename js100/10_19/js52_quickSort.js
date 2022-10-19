// 퀵 정렬 구현하기 (빈칸 채우기)
// arr[0] 을 기준으로 해서 작은 수들을 left 배열에, 큰 수들을 right 배열에 넣고,
// left 와 right 배열도 같은 과정을 재귀적으로 겪는다.

function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i=1; i<arr.length; i++){
      if(arr[i] < pivot){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
  
const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
console.log(quickSort(array));