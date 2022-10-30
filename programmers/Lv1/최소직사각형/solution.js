function solution(sizes) {
    let w = [];
    let h = [];
    
    sizes.forEach(el => {
       return el.sort((a, b) => b - a); 
    });
    
    for (const num of sizes) {
        w.push(num[0]);
        h.push(num[1]);
    }
    
    return Math.max(...w) * Math.max(...h);
}