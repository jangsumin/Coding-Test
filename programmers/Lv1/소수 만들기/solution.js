function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer += 1;
            }
        }
    }
    return answer;
}

function isPrime(n) {
    let result = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            result = false;
            break;
        }
    }
    return result;
}
