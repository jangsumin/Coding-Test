// 3의 배수면 짝 출력, 아니면 입력값 그대로 출력
let inputNum = prompt("입력 : ");

if (inputNum % 3 == 0) {
    console.log("짝");
} else {
    console.log(inputNum);
}