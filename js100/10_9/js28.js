const inputStr = prompt('문자열을 입력하세요 : ').split('');

for (let i=0; i<=inputStr.length-2; i++) {
    let gram = [inputStr[i], inputStr[i + 1]].join(' ');
    console.log(gram);
}