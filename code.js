function followPath(graph, currentVertex, end, visited) {

    //If the current vertex equals the vertex we are looking for, return path
    if(currentVertex == end) {
        return[currentVertex];
    }

    //Mark vertex as visted
    visited[currentVertex] = true;

    //Go through path of current vertex, look for end
    for(let nextVertex in graph[currentVertex]) {
        if(!visited[nextVertex]) {
            //recursively call follow path to find the end vertex we are looking for
            let path = followPath(graph, nextVertex, end, visited)

            //Add vertices to the beginning of the path as the recursion unravels
            if(path.length > 0) {
                path.unshift(currentVertex);
                return path;
            }
        }
    }

    return [];
}

function augmentingPath(graph, start, end) {

    let visited = {};

    if(start == end) {
        return [start];
    }

    return followPath(graph, start, end, visited);
}

// var graph = {'foo': {'boo': 7},
//              'boo': {'foo': 3, 'bar': 2},
//              'bar': {'boo': 4}};
// console.log(augmentingPath(graph, 'foo', 'bar'));
