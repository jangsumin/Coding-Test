// 문자열 입력하고 소문자는 대문자로, 대문자는 소문자로 바꾸기.
let inputStr = prompt('문자열을 입력하세요 : ').split('');

let newStr = inputStr.map(a => {
    if(a >= "A" && a <= "Z") {
        return a.toLowerCase();
    } else { 
        return a.toUpperCase();
    }
});

console.log(newStr.join(""));