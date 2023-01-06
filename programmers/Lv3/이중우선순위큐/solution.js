function solution(operations) {
  let queue = [];
  operations.map(operation => {
      if (operation[0] === 'I') {
          queue.push(parseInt(splitOperation(operation)[1]));
          queue.sort((a, b) => a - b);
      }
      if (operation[0] === 'D') {
          if (splitOperation(operation)[1] === '-1') queue.shift();
          if (splitOperation(operation)[1] === '1') queue.pop();
      }
  });
  return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}

function splitOperation(s) {
  const operate = s.split(' ');
  return operate;
}