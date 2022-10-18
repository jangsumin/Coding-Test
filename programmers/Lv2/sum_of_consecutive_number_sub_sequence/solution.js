function solution(elements) {
    let repeat_elements = [...elements, ...elements];
    let set = new Set();
    for(let len=1; len<=elements.length; len++) {
        for(let start=0; start<elements.length; start++) {
            let end = start + len;
            set.add(repeat_elements.slice(start, end).reduce((a, b) => a + b));
        }
    }
    
    return set.size;
}

console.log(solution([4, 3, 2, 1]));