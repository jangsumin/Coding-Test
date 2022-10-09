const inputAlphabet = prompt("알파벳을 입력하세요 : ");

if (inputAlphabet >= "A" && inputAlphabet <= "Z") {
    console.log("YES");
} else {
    console.log("NO");
}

// if (inputAlphabet === inputAlphabet.toUpperCase()) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }