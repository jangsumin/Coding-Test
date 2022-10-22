// 다른 사람의 풀이 중 가장 짤은 것
/*
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
*/

// 조건 중에 arr는 크기는 무조건 1 이상이므로 push하고 시작
function solution(arr)
{
    let answer = [];
    let value = arr[0];
    answer.push(arr[0]);

    for (let i=1;i<arr.length;i++) {
        if (arr[i] === value) {
            continue;
        } else {
            value = arr[i];
            answer.push(arr[i]);
        }
    }

    return answer;
}