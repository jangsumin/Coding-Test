function solution(phone_number) {
    let num_arr = phone_number.split('');

    for(let i=0;i<phone_number.length-4;i++) {
        num_arr[i] = "*";
    }

    let answer = num_arr.join('');
    return answer;
}

/*
function(str) {
    let answer = "*".repeat(str.length - 4) + str.slice(-4);

    return answer;
}
*/