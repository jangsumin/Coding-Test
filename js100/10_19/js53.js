// 정규표현식으로 풀기 쉽지 않아보인다.

function verifyBrackets(item){
    // 여는 괄호만 넣을 빈 배열 생성
    var temp =[];
    var map = {
      '(':')',
      '[':']',
      '{':'}'
    }
    for (var i=0; i<item.length; i++){
      //문자열 item 의 (, {, [ 만 추출
      if(item[i]==="(" || item[i]==="[" || item[i]==="{"){
        temp.push(item[i]);
      }
      else if(item[i]===")" || item[i]==="]" || item[i]==="}") {
        //닫는 괄호가 나오면 여는 괄호 중 가장 늦게 들어간 것을 객체를 사용해서 비교 가능
        var temp_key = temp.pop();
        if(item[i]!==map[temp_key]){
          return "NO";
        }
      }
    }

    //남은 괄호가 있어도 NO
    if(temp.length!==0){
      result = "NO";
    }

    return "YES";
  }

let inputStr = prompt('괄호 문자열을 입력하세요 : ').split('');

console.log(verifyBrackets(inputStr));