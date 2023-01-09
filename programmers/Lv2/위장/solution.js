function solution(clothes) {
    let obj = new Object();
    clothes.map((cloth) => {
        obj[cloth[1]] === undefined ? (obj[cloth[1]] = 1) : (obj[cloth[1]] += 1);
    });

    let arr = Object.values(obj);
    let answer = arr.reduce((acc, cur) => acc * (cur + 1), 1);
    return answer - 1;
}
