export const createCostsTable = (graph) => {
  const keys = Object.keys(graph);
  return keys.reduce((previous, current) => {
    if (!previous) {
      return graph[keys[0]];
    }
    if (!Object.prototype.hasOwnProperty.call(previous, current)) {
      return { ...previous, [current]: Infinity };
    }

    return previous;
  }, null);
};

export const createParentTable = (graph) => {
  const keys = Object.keys(graph);
  const firstNode = graph[keys[0]];

  const reducedParentFirstNode = Object.keys(firstNode).reduce((previous, current) => ({
    ...previous,
    [current]: keys[0],
  }), {});


  return keys.reduce((previous, current) => {
    if (!previous) {
      return reducedParentFirstNode;
    }

    if (!Object.prototype.hasOwnProperty.call(previous, current)) {
      return { ...previous, [current]: null };
    }

    return previous;
  }, null);
};

export const getCheapestNodeName = (costTable) => {
  const costTableKey = Object.keys(costTable);
  return costTableKey.reduce((previous, current) => {
    if (!previous || costTable[current] < costTable[previous]) {
      return current;
    }
    return previous;
  }, null);
};

export const updateCostTable = (costTable, parentTable, graph, currentNodeName) => {
  const currentNode = graph[currentNodeName];
  const previousCost = costTable[currentNodeName];

  return Object.keys(currentNode).reduce((previous, current) => {
    const [previousCostTable, previousParentTable] = previous;
    const totalCost = currentNode[current] + previousCost;

    if (totalCost < previousCostTable[current]) {
      const updatedCostTable = {
        ...previousCostTable,
        [current]: totalCost,
      };
      const updatedParentTable = {
        ...previousParentTable,
        [current]: currentNodeName,
      };
      return [updatedCostTable, updatedParentTable];
    }
    return previous;
  }, [costTable, parentTable]);
};

export const jikstra = (graph) => {
  const costTable = createCostsTable(graph);
  const parentTable = createParentTable(graph);
  const graphKeys = Object.keys(graph);

  return graphKeys.reduce((previous, currentNodeName) => {
    const [previousCostTable, previousParentTable] = previous;
    return updateCostTable(previousCostTable, previousParentTable, graph, currentNodeName);
  }, [costTable, parentTable])[1];
};

export default jikstra;
