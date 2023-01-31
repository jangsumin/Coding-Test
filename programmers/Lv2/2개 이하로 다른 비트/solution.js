function solution(numbers) {
    let answer = [];

    // numbers 순회하며 변환한 수를 answer에 push
    numbers.map((num) => answer.push(converter(num)));
    return answer;
}

function converter(num) {
    // 짝수면 1만 더해서 반환
    // 홀수면 num을 2진수로 변환하고 나서 뒤의 자리에서부터 가장 먼저 나오는
    // 0을 1로 바꾼 수를 더하고, 바꾼 수의 반만큼 빼서 반환
    if (num % 2 === 0) return num + 1;
    else {
        let binary = num.toString(2).split('');
        let zeroLoc = binary.length;
        for (let i = binary.length - 1; i >= 0; i--) {
            if (binary[i] === '0') {
                zeroLoc = binary.length - 1 - i;
                break;
            }
        }
        return num + Math.pow(2, zeroLoc) - Math.pow(2, zeroLoc) / 2;
    }
}
