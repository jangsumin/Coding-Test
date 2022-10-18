function solution(numbers, hand) {
    let arr = [];
    let left = {
        x : 1, y : 3
    };
    let right = {
        x : 3, y : 3
    };
    let middle = {
        x : 2, y : 3
    };
    
    let new_numbers = numbers.map(e => {
        if (e === 0) {
            return 11;
        }
        return e;
    });
    
    new_numbers.forEach(el => {
        if (el === 1 || el === 4 || el === 7) {
            left.x = el % 3;
            left.y = Math.floor(el / 3);
            arr.push("L");
        } else if (el === 3 || el === 6 || el === 9) {
            right.x = 3;
            right.y = (el / 3) - 1; 
            arr.push("R");
        } else {
            middle.x = el % 3;
            middle.y = Math.floor(el / 3);
            if ((Math.abs(left.x - middle.x) + Math.abs(left.y - middle.y)) < 
            (Math.abs(right.x - middle.x) + Math.abs(right.y - middle.y))) {
                left.x = el % 3;
                left.y = Math.floor(el / 3);
                arr.push("L");
            } else if ((Math.abs(left.x - middle.x) + Math.abs(left.y - middle.y)) > 
            (Math.abs(right.x - middle.x) + Math.abs(right.y - middle.y))) {
                right.x = el % 3;
                right.y = Math.floor(el / 3);
                arr.push("R");
            } else {
                if (hand === "right") {
                    right.x = el % 3;
                    right.y = Math.floor(el / 3);
                    arr.push("R");
                } else {
                    left.x = el % 3;
                    left.y = Math.floor(el / 3);
                    arr.push("L");
                }
            }
        }
    });
    
    return arr.join("");
}