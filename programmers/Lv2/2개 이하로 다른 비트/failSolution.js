// 시간 초과 코드

function solution(numbers) {
    let answer = [];

    // numbers 순회하며 변환한 수를 answer에 push
    numbers.map((num) => answer.push(converter(num)));
    return answer;
}

function converter(num) {
    let result = 0;
    let bitObj = {};

    // 변환하고자 하는 숫자의 2진수 길이를 저장
    // bitObj의 key를 인덱스로, value를 비트로 하여 뒤에서부터 채우기
    let initLen = num.toString(2).length;
    num.toString(2)
        .split('')
        .map((bit, idx) => {
            if (bit === '1') bitObj[initLen - 1 - idx] = 1;
            if (bit === '0') bitObj[initLen - 1 - idx] = 0;
        });

    // 1씩 증가하면서 다른 비트의 개수를 확인하기
    // 확인할 때, 순회하면서 비교하는 것이 아님 => 중첩 반복문으로 인해 시간 복잡도 증가
    // bitObj의 value에 더하면서 그 값이 1이라면 1 + 0 혹은 0 + 1이므로 다른 비트라 간주하고 카운트
    // 카운트 갯수가 1이상 2이하인 경우 while문 빠져나오면서 바로 결과 반환
    while (++num) {
        let diffCnt = 0;
        let numLen = num.toString(2).length;
        if (numLen > initLen) {
            bitObj[numLen - 1] = 0;
            initLen = numLen;
        }

        let arr = Object.values(bitObj);

        num.toString(2)
            .split('')
            .map((bit, idx) => {
                if (bit === '1') arr[numLen - 1 - idx] += 1;
            });

        arr.map((cnt) => {
            if (cnt === 1) diffCnt += 1;
        });

        if (diffCnt >= 1 && diffCnt <= 2) {
            result = num;
            break;
        }
    }

    return result;
}
