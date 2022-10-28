function solution(a, b) {
    let daysPerMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = 0;
        
    for (let i=1;i<a;i++) {
        days += daysPerMonth[i-1];
    }
    days += b;
    
    switch (days % 7) {
        case 0:
            return "THU";
        case 1:
            return "FRI";
        case 2:
            return "SAT";
        case 3:
            return "SUN";
        case 4:
            return "MON";
        case 5:
            return "TUE";
        case 6:
            return "WED";
    }
}