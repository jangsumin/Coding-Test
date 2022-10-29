function solution(my_string) {
    let answer = my_string.split(" ");
    let sum = parseInt(answer[0]);
  
    console.log(answer);
    
    for (let i=1;i<answer.length;i++) {
        if (answer[i] === '+') {
            sum += parseInt(answer[i + 1]);
            i += 1;
        } else {
            sum -= parseInt(answer[i + 1]);
            i += 1;
        }   
    }
    return sum;
}