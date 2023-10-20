function solution(players, callings) {
    const map = {};
    
    // indexOf 메서드로 순회를 하면 최악의 경우 50,000 * 1,000,000
    // callings.map((el) => {
    //     const idx = players.indexOf(el);
    //     swap(players, idx, idx - 1);
    // });
    
    players.map((el, cur) => {
        map[el] = cur;
    });
    
    callings.map((el) => {
        swap(map, players, map[el], map[el] - 1);
    });
    
    return players;
}

function swap(map, arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    map[arr[i]] = i;
    map[arr[j]] = j;
}
