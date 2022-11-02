// 배열 내에 객체를 넣는 방법 참고하기

function solution(N, stages) {
    let failure = [];
    let result = [];

    for (let i=1;i<=N;i++) {
        let validity = stages.filter(el => el === i).length / stages.filter(el => el >= i).length;
        failure.push({stage: i, validity});  
    }
    
    failure.sort((a, b) => {
        if (a.validity < b.validity) return 1;
        if (a.validity > b.validity) return -1;
        if (a.validity === b.validity) return 0;
    })
    
    return failure.map(el => el.stage)
}