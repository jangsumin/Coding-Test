// suedo code
// 중괄호 모두 제거하고, 문자열 형태로 튜플 원소 받기 -> ['2', '2,1', '2,1,3', '2,1,3,4']
// 각 튜플을 배열 형태로 변환과 동시에 튜플의 원소들을 문자열을 숫자 형태로 변환
// 각 튜플의 길이를 기준으로 오름차순 정렬
// 튜플이 들어있는 배열을 순회하면서 answer 배열에 없으면 push

function solution(s) {
    let answer = [];
    let tupleArr = strPreprocessor(s);
    tupleArr = tupleArr.map((tuple) => tuple.split(',').map((el) => parseInt(el)));
    tupleArr.sort((a, b) => a.length - b.length);
    tupleArr.map((tuple) => {
        tuple.map((el) => {
            if (!answer.includes(el)) answer.push(el);
        });
    });
    return answer;
}

function strPreprocessor(s) {
    let arr = s.split('');
    arr.shift();
    arr.shift();
    arr.pop();
    arr.pop();
    arr = arr.join('').split('},{');
    return arr;
}
