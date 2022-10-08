 let num_arr = prompt("입력 : ").split(' ');

let res_arr = [Math.floor(num_arr[0] / num_arr[1]), num_arr[0] % num_arr[1]].join(' ');
console.log(res_arr);