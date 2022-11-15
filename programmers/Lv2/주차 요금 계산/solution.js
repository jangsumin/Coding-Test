// 의사 코드 작성
// records 배열의 원소들을 쪼개기
// 찍힌 기록이 홀수 개이면 무조건 마지막 출차 23:59분에 했음
// 시간 계산하기
// 계산해서 fees[0]분 보다 작으면 fees[1]원만 부과
// 올림하기 위해 Math.ceil() 메서드 사용

function solution(fees, records) {
  let answer = [];

  // 차량 번호만 추출하여 저장
  let carNumberArr = [];
  records.forEach(record => {
      result.push(record.split(" ")[1]); 
  });

  // 차량 번호를 오름차순으로 정렬하고, 중복된 값 제거하기
  let set = new Set(result.sort());
  
  for (const i of set) {
      let timeArray = [];
      // 내가 알고 싶은 차량 번호 하나에 대해서 모든 시간을 뽑아서 저장 
      records.forEach(record => {
          if (i === record.split(" ")[1]) {
              timeArray.push(record.split(" ")[0]);
          }
      });
      // 시간이 3개면 마지막에 출차를 23:59에 한 것이므로 선택적으로 추가해주기
      if (timeArray.length % 2 == 1) timeArray.push('23:59');

      // 주차 시간 계산
      let totalTime = 0;
      for (let j = 0; j < timeArray.length; j += 2) {
          timeArray[j + 1].split(":").map((v, i) => {
              if (i === 0) totalTime += Number(v) * 60;
              if (i === 1) totalTime += Number(v);
          });
          timeArray[j].split(":").map((v, i) => {
              if (i === 0) totalTime -= Number(v) * 60;
              if (i === 1) totalTime -= Number(v);
          });
      }

      // 주차 요금 계산, answer 배열에 저장
      if (totalTime <= fees[0]) answer.push(fees[1]);
      if (totalTime > fees[0]) {
          answer.push(fees[1] + Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3]);
      }
  }

  // 결과 반환
  return answer;
}