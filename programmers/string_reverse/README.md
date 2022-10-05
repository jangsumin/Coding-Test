C 형식으로 풀려다가, 중간에 string(문자열) 타입은 원시타입이라 본래의 값이 변하지 않는다는 사실 알아챔.
***
+ String.prototype 에는 문자열을 뒤집는 메소드를 지원하지 않음.
+ 그래서 배열로 바꾸어서 Array.prototype의 reverse()를 사용해서 배열의 순서를 뒤바꾸어야 함.
+ split(seperator, limit)
  * seperator는 구분자를 의미하며, 구분자를 기준으로 문자열을 잘라서 배열의 각 원소로 배치시킨다.
  * limit은 내가 원하는 부분까지만 배열로 변환하기 위해 있는 파라미터이다.
+ join(seperator)
  * seperator를 배열 원소 사이에 껴서 하나의 문자열로 반환함.
  * 이 때, default 값은 ','이다.
***
toString()을 join() 메서드 대신 사용할 수 없는 이유는 무조건 ','을 배열 원소 사이에 껴서
문자열로 반환하기 때문이다.
