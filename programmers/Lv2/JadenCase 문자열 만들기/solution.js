function solution(s) {
    s = s.toLowerCase().split('');
    for (let i = 0; i < s.length; i++) {
        if (s[0] >= 'a' && s[0] <= 'z') s[0] = s[0].toUpperCase();
        if (s[i - 1] === ' ' && s[i] >= 'a' && s[i] <= 'z') s[i] = s[i].toUpperCase();
    }
    return s.join('');
}
