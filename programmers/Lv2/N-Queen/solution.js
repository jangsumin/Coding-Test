function solution(n) {
    let answer = 0; 
    
    const board = [];
    for (let i = 0; i < n; i++) {
        const temp = [];
        temp.length = n;
        temp.fill(false)
        board.push(temp);
    }
    
    function backtrack(row) {
        if (row === n) {
            answer++;
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (columnCheck(col) && crossCheck(row, col)) {
                board[row][col] = true;
                backtrack(row + 1);
                board[row][col] = false;
            }
        }
    }
    
    function columnCheck(y) {
        for (let i = 0; i < n; i++) {
            if (board[i][y] === true) return false;
        }
        return true;
    }
    
    function crossCheck(x, y) {
        let r = 1;
        
        while (x + r < n && y + r < n) {
            if (board[x + r][y + r] == true) return false;
            r++;
        }
        r = 1;
        while (x + r < n && y - r >= 0) {
            if (board[x + r][y - r] == true) return false;
            r++;
        }
        r = 1;
        while (x - r >= 0 && y + r < n) {
            if (board[x - r][y + r] == true) return false;
            r++;
        }
        r = 1;
        while (x - r >= 0 && y - r >= 0) {
            if (board[x - r][y - r] == true) return false;
            r++;
        }
        
        return true;
    }
    
    backtrack(0);
    return answer;
}
