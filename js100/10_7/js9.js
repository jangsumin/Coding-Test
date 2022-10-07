// 2019/04/26 11:34:27 출력하기
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

// 역따옴표 사용해서 묶어줘야 함.
// 문자열 포매팅 방식.
// var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);