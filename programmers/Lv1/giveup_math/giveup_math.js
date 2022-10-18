function solution(answers) {
    var result = [];
    let max_result = 0;

    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let n = [0, 0, 0];

    for (let i=0;i<answers.length;i++) {
        if (answers[i] == person1[i % 5]) {
            n[0] += 1;
        }

        if (answers[i] == person2[i % 8]) {
            n[1] += 1;
        }

        if (answers[i] == person3[i % 10]) {
            n[2] += 1;
        }
    }

    max_result = Math.max(...n);
    for (let i=0;i<3;i++) {
        if (max_result == n[i]) {
            result.push(i + 1);
        }
    }
    return result;
}

solution([1, 2, 3, 4, 5]); // [1]
solution([1, 3, 2, 4, 2]); // [1, 2, 3]