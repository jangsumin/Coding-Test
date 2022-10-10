// Factory 함수 구현
// Factory 함수는 객체(함수, 배열)를 반환한다.
function one(n){
    function two(value){
        const square = Math.pow(value, n);
        return square;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));