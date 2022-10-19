# 스킬트리 문제, 프로그래머스 Lv.2
## 명시된 문제 제한 조건
- 스킬 중복 없음. -> 정규식으로 제외하고 나서의 문자열의 길이는 인자보다 길어질 수는 없어서 indexof() 사용가능.
- 예를 들어 "CBDD"와 같은 스킬트리를 인자로 줄 수 없음.
- - -
### 문제 해결 논리
D : C와 B를 배우지 않고서는 배울 수 없음.

B : C를 배우지 않고서는 B를 배울 수 없음.

C : 어쨌거나 C부터 배워야 다른 스킬을 배울 수 있으니, C는 무조건 맨 앞에 있어야 함.

그렇기 때문에, 먼저 스킬트리와 관계 없는 알파벳은 정규식으로 제외를 하고, (Ex) “ECBF” -> “CB”)

“CBD”.indexof(“CB”) === 0 이면 제대로 된 스킬트리라 할 수 있음.

정규식으로 제외를 하고, 남은 문자열이 “D”라면

“CBD”.indexof(“D”) 는 0이 아니고 2라서 스킬트리라 할 수 없음.

조건문을 세워서 해당 조건이 맞을 때 카운트 올리고 반환.
- - -
### Feedback 받으면서 알게 된 것
- hidden case가 많아서 좀 더 신중하게 문제를 풀어야 한다.
- 정규표현식에서 변수를 사용하려면 `new RegExp();`생성자를 사용해야 한다.
- 정규표현식을 사용하는 부분은 가독성이 안좋을지 몰라도, 소스 코드 자체는 간결해진다.