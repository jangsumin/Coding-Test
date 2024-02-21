function solution(r1, r2) {
    let result = 0
    
    // 시간초과
    // for (let i = -r2; i <= r2; i++) {
    //     for (let j = -r2; j <= r2; j++) {
    //         const dist = Math.sqrt(i * i + j * j)
    //         if (dist >= r1 && dist <= r2) result++
    //     }
    // }
    
    for (let i = 1; i <= r2; i++) {
        const o2 = Math.sqrt(r2 * r2 - i * i)
        const o1 = r1 * r1 - i * i < 0 ? 0 : Math.sqrt(r1 * r1 - i * i)
        result += Math.floor(o2) - Math.ceil(o1) + 1
    }
    
    return result * 4
}
