function solution(babbling) {
    let result = 0;

    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i];
        if (word.includes('ayaaya') || word.includes('mama') || word.includes('woowoo') || word.includes('yeye'))
            continue;

        word = word.replaceAll('aya', ' ');
        word = word.replaceAll('ye', ' ');
        word = word.replaceAll('woo', ' ');
        word = word.replaceAll('ma', ' ');
        word = word.replaceAll(' ', '');
        if (word.length === 0) result += 1;
    }
    return result;
}
