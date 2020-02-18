export const breathFirst = (name, graph, searchFunction, queue = []) => {
  const workingQueue = [...queue, ...graph[name]];

  if (workingQueue.length === 0) {
    return null;
  }

  const index = workingQueue.findIndex(searchFunction);


  if (index > -1) {
    return workingQueue[index];
  }

  const reducedQueue = workingQueue.slice(1);
  return breathFirst(reducedQueue[0], graph, searchFunction, reducedQueue);
};

export default breathFirst;
