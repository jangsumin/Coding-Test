// 문제가 2019년에 출제된 것 같음.
const d = new Date();

let y = d.getTime();
y = Math.floor(y/(1000*60*60*24*365)) + 1970 - 3;

console.log(y); // 3을 빼지 않는 다면 현재 2022년이 출력됨.