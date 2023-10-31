function solution(n, edge) {
    const map = {};
    edge.map(arr => {
        const [node1, node2] = arr;
        if (map[node1] === undefined) {
            map[node1] = [];
        }
        map[node1].push(node2);
        if (map[node2] === undefined) {
            map[node2] = [];
        }
        map[node2].push(node1);
    });
    
    const dist = [];
    const v = [];
    dist.length = n + 1;
    v.length = n + 1;
    dist.fill(0);
    v.fill(false);
    
    dist[1] = 0;
    
    function bfs(node) {
        v[node] = true;
        const queue = [node];
        while (queue.length != 0) {
            const shiftedNode = queue.shift();
            map[shiftedNode].map(n => {
                if (!v[n]) {
                    v[n] = true;
                    dist[n] = dist[shiftedNode] + 1;
                    queue.push(n);
                }
            });
        }
    }
    
    bfs(1);
    const maxNum = Math.max(...dist);
    let result = 0;
    dist.map(num => {
        if (num === maxNum) result++;
    });
    return result;
}
