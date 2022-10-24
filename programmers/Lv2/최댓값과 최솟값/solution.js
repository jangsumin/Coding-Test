// Lv2 문제이지만 정답률이 높아 따로 마크다운 파일을 작성하지 않았습니다.
// Math.min 이나 Math.max 메서드를 쓰기 위해서 스프레드 문법을 사용하였습니다.
function solution(s) {
    let arr = s.split(' ');

    return [Math.min(...arr), Math.max(...arr)].join(' ');
}