function solution(rsp) {
  result = "";
  rsp.split("").map(el => {
     el === "2" ? result += "0" : el === "0" ? result += "5" : result += "2"; 
  });
  return result;
}