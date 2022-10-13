function solution(skill, skill_trees) {
    let trimmedArr = skill_trees.map(el => el.replace(new RegExp(`[^${skill}]`, 'g'), ''));
    let cnt = 0;
  
    for (const i of trimmedArr) {
      if (skill.indexOf(i) === 0) {
        cnt += 1;
      }
    }
   
    return cnt;
}

console.log(solution("CBD", ["ACBD", "CBEF", "BACDE", "CBADF"])); // 출력 : 3