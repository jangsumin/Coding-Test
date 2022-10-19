# 문자열 내 마음대로 자르기
- - -
- 처음에는 slice를 사용해서 문자열을 자르고 정렬할 생각이었지만, 그렇게 한다면 본 strings를 반환하기 힘들게 된다.
- 위와 같은 풀이를 위해서는 sort 메서드에서 `[compareFunction]` 이라는 콜백함수를 활용해야 하는데, 그 원리는 다음과 같다.
    - 자바스크립트의 sort 함수는 기본적으로 문자열로 바꾸어 정렬한다. (기본적으로 오름차순)
    - UTF-16 코드 유닛값에 따라 정렬하면, 정상적으로 숫자(number 타입)는 정렬이 불가능하다.
    - `a` 와 `b` 인자를 매개변수로 compareFunction에 전달하고, 배열을 순회한다.
    - 그래서 sort 메서드에 대한 커스터마이징이 필요하다.
    - compareFunction이 반환하는 값에 따라 정렬이 된다.
        * 0보다 작으면, 앞에 있는 `a` 인자가 더 우선하게 만든다.
        * 0이랑 같으면, 그대로 두기는 하는데, 정렬 방식은 ECMAScript 사양에 명시되어 있지 않다.
        * 0보다 크면, 뒤에 있는 `b` 인자가 더 우선하게 만든다.
- 하지만!
    - `a` 와 `b` 가 순회하는 방식을 아직 잘 모르겠다.
    - 그런데 공식문서에나, 딥다이브에나 내부 동작 원리를 명시하고 있지 않다.