// day 57_1
// 가장 먼 노드

const solution = (n, edge) => {
    const visited = new Array(n + 1).fill(-1);
    const queue = [1];
    visited[0] = 0;
    visited[1] = 0;
    //모든 노드를 방문할때까지 계속한다.
    while (edge.length !== 0) {
      //방문한 노드를 큐에서 뺀다.
      const Node = queue.shift();
      //edge를 순회하며 다음 방문할 노드를 찾는다.
      for (let i = 0; i < edge.length; i++) {
        //방문할 노드가 있다면
        if (edge[i].includes(Node)) {
          const filter = edge[i].filter((e) => e !== Node);
          //이미 방문했던 노드라면 엣지를 그냥 skip한다.
          if (visited[filter[0]] !== -1) {
            edge.splice(i, 1);
            i--;
            continue;
          }
          //방문하지 않았던 노드라면 노드를 방문해준다.
          queue.push(filter[0]);
          visited[filter[0]] = visited[Node] + 1;
          edge.splice(i, 1);
          i--;
        }
      }
    }
    const maxNum = Math.max(...visited);
    return visited.filter((e) => e === maxNum).length;
  };