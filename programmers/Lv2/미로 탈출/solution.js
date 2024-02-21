function solution(maps) {
    const board = []
    
    let startX, startY
    const N = maps.length
    const M = maps[0].length
    
    maps.forEach((rowString, rowIndex) => {
        const row = rowString.split("")
        
        row.forEach((el, index) => {
            if (el === "S") {
                startX = rowIndex
                startY = index
            }
        })
        
        board.push(row)
    })

    let result = -1
    const dx = [-1, 0, 1, 0]
    const dy = [0, 1, 0, -1]
    let visited = new Array(N).fill(0).map(() => new Array(M).fill(false))
    
    function bfs(x, y, cnt) {
        let mode = "SWITCH" // 처음에는 레버를 찾아야 하고, 그 다음 EXIT 모드로 전환
        visited[x][y] = true
        let queue = []
        queue.push([x, y, cnt])
        
        while (queue.length) {
            const shifted = queue.shift()
            
            if (board[shifted[0]][shifted[1]] === "L" && mode === "SWITCH") { // 레버를 만남
                mode = "EXIT"
                visited = new Array(N).fill(0).map(() => new Array(M).fill(false))
                visited[shifted[0]][shifted[1]] = true
                queue = []
            }
            
            if (board[shifted[0]][shifted[1]] === "E" && mode === "EXIT") { // 출구를 만남
                result = shifted[2]
                break
            }
            
            for (let i = 0; i < 4; i++) {
                const nx = shifted[0] + dx[i]
                const ny = shifted[1] + dy[i]
                if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && board[nx][ny] !== "X") {
                    visited[nx][ny] = true
                    queue.push([nx, ny, shifted[2] + 1])
                }
            }
        }
    }
    
    bfs(startX, startY, 0)
    return result
}
