import {
  createCostsTable, createParentTable, getCheapestNodeName, updateCostTable, jikstra,
} from '../jikstra';


describe.only('Jikstra', () => {
  const graph = {
    start: {
      a: 6,
      b: 2,
    },
    a: {
      b: 3,
      end: 1,
    },
    b: {
      a: 3,
      end: 5,
    },
    end: {},
  };
  it('should create the cost table', () => {
    const result = createCostsTable(graph);
    const expectedResult = {
      a: 6,
      b: 2,
      end: Infinity,
    };
    expect(result).toEqual(expectedResult);
  });

  describe('createParentTabe', () => {
    it('should create the parentTable', () => {
      const result = createParentTable(graph);
      const expectedResult = {
        a: 'start',
        b: 'start',
        end: null,
      };
      expect(result).toEqual(expectedResult);
    });


    it('should not rely on node name', () => {
      const graph1 = {
        foo: {
          a: 6,
          b: 2,
        },
        a: {
          b: 3,
          end: 1,
        },
        b: {
          end: 5,
        },
        bar: {},
      };
      const result = createParentTable(graph1);
      const expectedResult = {
        a: 'foo',
        b: 'foo',
        bar: null,
      };
      expect(result).toEqual(expectedResult);
    });

    it('should not rely on node node position in the graph', () => {
      const graph2 = {
        start: {
          a: 6,
          b: 2,
        },
        end: {},
        a: {
          b: 3,
          end: 1,
        },
        b: {
          end: 5,
        },
      };
      const result = createParentTable(graph2);
      const expectedResult = {
        a: 'start',
        b: 'start',
        end: null,
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('getCheapestNode', () => {
    it('should return the cheapest node from the graph', () => {
      const costTable = {
        a: 6,
        b: 2,
        end: Infinity,
      };

      const expectedResult = 'b';
      const result = getCheapestNodeName(costTable);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('UpdateCostAndParentTable', () => {
    it('should update the cost and parent table according to a node', () => {
      const costTable = {
        a: 6,
        b: 2,
        end: Infinity,
      };

      const parentTable = {
        a: 'start',
        b: 'start',
        end: null,
      };
      const updatedCostTable = {
        a: 5,
        b: 2,
        end: 7,
      };

      const updatedParentTable = {
        a: 'b',
        b: 'start',
        end: 'b',
      };

      const result = updateCostTable(costTable, parentTable, graph, 'b');

      expect(result).toEqual([updatedCostTable, updatedParentTable]);
    });
  });

  describe('Jikstra - the main function', () => {
    it('should return the cheapest path -- simple graph', () => {
      const expectedResult = {
        a: 'b',
        b: 'start',
        end: 'a',
      };

      const result = jikstra(graph);
      expect(result).toEqual(expectedResult);
    });

    it('should return the cheapest path -- more complicated graph', () => {
      const mediumGraph = {
        start: {
          a: 8,
          b: 6,
        },
        a: {
          start: 8,
          c: 3,
        },
        b: {
          start: 6,
          c: 1,
          end: 4,
        },
        c: {
          a: 3,
          end: 2,
        },
        end: {},
      };
      const expectedResult = {
        a: 'start',
        b: 'start',
        c: 'b',
        end: 'c',
      };

      const result = jikstra(mediumGraph);
      expect(result).toEqual(expectedResult);
    });
  });
});
