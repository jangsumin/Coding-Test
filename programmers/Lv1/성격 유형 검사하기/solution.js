// 의사 코드 작성
// 1. 유형별 객체 만들기 -> 객체의 원소는 8개
// 2. survey 순회
// 3. 순회하면서 유형을 가르고, 구조 분해 할당
// 4. 순회 동시에 choices의 값을 보고 1 ~ 3 이면 3 ~ 1의 점수를 주고, 5 ~ 7이면 1 ~ 3의 점수 주기

function solution(survey, choices) {
  let result = '';
  const type = {
    "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0,  
  };
  survey.map((v, i) => {
      let [type1, type2] = v.split("");
      if (choices[i] >= 1 && choices[i] <= 3) type[type1] += 4 - choices[i];
      if (choices[i] >= 5 && choices[i] <= 7) type[type2] += choices[i] - 4;
  });
  type["R"] >= type["T"] ? result += "R" : result += "T";
  type["C"] >= type["F"] ? result += "C" : result += "F";
  type["J"] >= type["M"] ? result += "J" : result += "M";
  type["A"] >= type["N"] ? result += "A" : result += "N";
  return result;
}