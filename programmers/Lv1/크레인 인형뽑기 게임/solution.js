// 의사 코드
// 가로방향으로 구성되어 있는 board를 세로방향으로 개편
// 크레인이 내려오면서 board[moves - i][i]의 값이 0이 아닌 것들만 먼저 집어감
// 집어가면 집어간 부분을 0으로 바꾸고, 집어간 것을 바구니 array에 담기
// 집어갈 때마다 array의 마지막 원소와 비교하여 같으면 사라지기
// 집을 것이 없으면 array에 아무것도 추가하지 않기

function solution(board, moves) {
    const newBoard = [];
    const result = [];
    let disappearDoll = 0;
    for (let i = 0; i < board.length; i++) {
        const temp = [];
        for (let j = 0; j < board.length; j++) {
            temp.push(board[j][i]);
        }
        newBoard.push(temp);
    }

    for (const num of moves) {
        for (let i = 0; i < newBoard.length; i++) {
            if (newBoard[num - 1][i] !== 0) {
                if (result.length === 0) {
                    result.push(newBoard[num - 1][i]);
                    newBoard[num - 1][i] = 0;
                    break;
                } else {
                    if (result[result.length - 1] === newBoard[num - 1][i]) {
                        disappearDoll += 2;
                        result.pop();
                        newBoard[num - 1][i] = 0;
                        break;
                    } else {
                        result.push(newBoard[num - 1][i]);
                        newBoard[num - 1][i] = 0;
                        break;
                    }
                }
            }
        }
    }
    // 바구니에 담긴 것을 아래 코드로 확인할 수 있음.
    // console.log(result);
    return disappearDoll;
}
