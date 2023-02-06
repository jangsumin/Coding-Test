function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    for (let i = 0, j = people.length - 1; ; ) {
        if (i === j) {
            answer += 1;
            break;
        }
        if (i > j) {
            break;
        }

        if (people[i] + people[j] <= limit) {
            answer += 1;
            i++;
            j--;
        } else {
            answer += 1;
            j--;
        }
    }
    return answer;
}
