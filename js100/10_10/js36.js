let inputNum = prompt('1부터 9까지의 숫자 중 하나 입력하세요 : ');
result = [];

for(let i=1;i<=9;i++) {
    result.push(parseInt(inputNum) * i);
}

console.log(result.join(' '));