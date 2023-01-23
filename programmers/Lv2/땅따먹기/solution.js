// Dynaminc Programming 동적 계획법 사용

function solution(land) {
    for (let i = 1; i < land.length; i++) {
        land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
        land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
        land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
        land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
    }

    // flat() 이라고 하는 메서드를 사용하면 시간 초과가 난다.
    // return Math.max(...land.flat());
    // console.log(land);
    return Math.max(...land[land.length - 1]);
}
