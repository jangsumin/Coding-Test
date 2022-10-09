// 한글로 행성이름 입력하면 영어 이름으로 반환하기.

let inputPlanet = prompt("행성을 한글로 입력하시오 : ");

switch (inputPlanet) {
    case '수성':
        console.log('Mercury');
        break;
    case '금성':
        console.log('Venus');
        break;
    case '지구':
        console.log('Earth');
        break;
    case '화성':
        console.log('Mars');
        break;
    case '목성':
        console.log('Jupiter');
        break;
    case '토성':
        console.log('Saturn');
        break;
    case '천왕성':
        console.log('Uranus');
        break;
    case '해왕성':
        console.log('Neptune');
        break;
}

// 답안은 객체를 사용

// const planet = {
//     '수성' : 'Mercury',
//     '금성' : 'Venus',
//     '지구' : 'Earth',
//     '화성' : 'Mars',
//     '목성' : 'Jupiter',
//     '토성' : 'Saturn',
//     '천왕성' : 'Uranus',
//     '해왕성' : 'Neptune',
// };

// const inputPlanet2 = prompt("행성을 한글로 입력하시오 : ");

// console.log(planet[inputPlanet2]);