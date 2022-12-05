function solution(s) {
  let answer = 0;
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "Z") answer += parseInt(arr[i]);
      if (arr[i] === "Z") answer -= parseInt(arr[i - 1]);
  }
  return answer;
}