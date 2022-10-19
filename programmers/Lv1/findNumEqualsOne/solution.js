function solution(n) {
    let i = 0;
    while (i <= (n - 1)) {
        if (n % i == 1) {
            return i;
        }
        i++;
    }
}