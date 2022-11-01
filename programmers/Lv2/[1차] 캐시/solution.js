// 페이지 교체 알고리즘 LRU

function solution(cacheSize, cities) {
  let arr = [];
  let executeTime = 0;
  
  if(cacheSize === 0) return cities.length * 5;
  
  cities.map(el => {
      el = el.toLowerCase();
      if (!arr.includes(el)) {
          executeTime += 5;
          if (arr.length === cacheSize) {
              arr.shift();
          }
          arr.push(el);
      } else {
          executeTime += 1;
          arr.splice(arr.indexOf(el), 1);
          arr.push(el);
      }
      // console.log(arr);
  });
  
  return executeTime;
}