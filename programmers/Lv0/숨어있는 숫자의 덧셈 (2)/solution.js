function solution(my_string) {
  let result = 0;
  return my_string.replace(/[a-zA-Z]/g, ' ').split(' ').filter(x => x !== '').reduce((acc, cur) => acc + parseInt(cur), 0);
}