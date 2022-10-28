function solution(nums) {
    let set = new Set(nums);

    if (set.size >= Math.max(nums.length / 2)) return Math.max(nums.length / 2);
    else return set.size;
}