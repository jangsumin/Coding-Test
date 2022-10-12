// 윤년은 1년이 366일
const a = parseInt(prompt('월을 입력하세요 : '),10);
const b = parseInt(prompt('일을 입력하세요 : '),10);

const dateArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function returnDay(a, b, dateArr) {
    let dateSum = 0;
    let res = '';
    for (let i=0; i<=a-2; i++) {
        dateSum += dateArr[i];
    }
    dateSum += b;

    switch (dateSum % 7) {
        case 0 :
            res = 'TUE';
            break;
        case 1 :
            res = 'WED';
            break;
        case 2 :
            res = 'THU';
            break;
        case 3 :
            res = 'FRI';
            break;
        case 4 :
            res = 'SAT';
            break;
        case 5 :
            res = 'SUN';
            break;
        case 6 :
            res = 'MON';
            break;
    }

    return res;
}

console.log(returnDay(a, b, dateArr));