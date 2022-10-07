// 객체의 키 이름 중복
// 이때는 뒤에 있는 키에 값이 재할당됨.

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']); // 84이 출력