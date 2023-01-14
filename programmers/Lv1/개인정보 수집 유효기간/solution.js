function solution(today, terms, privacies) {
    let termsObj = {};
    for (let term of terms) {
        termsObj[term.split(' ')[0]] = term.split(' ')[1];
    }

    let [todayYear, todayMonth, todayDay] = today.split('.');
    todayYear = Number(todayYear);
    todayMonth = Number(todayMonth);
    todayDay = Number(todayDay);
    let answer = [];

    for (let i = 0; i < privacies.length; i++) {
        let [date, type] = privacies[i].split(' ');
        let [year, month, day] = date.split('.');
        type = Number(termsObj[type]);
        year = Number(year);
        month = Number(month);
        day = Number(day);

        // month 값이 12 넘어갔을 때 처리
        if (month + type > 12) {
            year += Math.floor((month + type) / 12);
            month = (month + type) % 12;
        } else {
            month = month + type;
        }

        // day가 1일 때 처리
        if (day === 1) {
            day = 28;
            month -= 1;
        } else day = day - 1;

        // month 0일 때 처리
        if (month === 0) {
            year -= 1;
            month = 12;
        }

        if (todayYear > year) answer.push(i + 1);
        else if (todayYear === year && todayMonth > month) answer.push(i + 1);
        else if (todayYear === year && todayMonth === month && todayDay > day) answer.push(i + 1);
    }
    return answer;
}
