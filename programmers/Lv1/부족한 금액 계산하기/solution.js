function solution(price, money, count) {
    let needMoney = 0;
    while (count) {
        needMoney += count * price;
        count--;
    }
    
    if (needMoney > money) return needMoney - money;
    else return 0;
}