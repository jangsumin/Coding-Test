function solution(record) {
    let result = [];
    let idName = {};
    record.map(el => {
        el = el.split(" ");
        if (el[0] === "Enter" || el[0] === "Change") {
            idName[el[1]] = el[2];
        }
    });
    
    record.map(el => {
        el = el.split(" ");
    if (el[0] === "Enter") {
            result.push(`${idName[el[1]]}님이 들어왔습니다.`);
        } else if (el[0] === "Leave") {
            result.push(`${idName[el[1]]}님이 나갔습니다.`);
        }
    });
    
    return result;
}