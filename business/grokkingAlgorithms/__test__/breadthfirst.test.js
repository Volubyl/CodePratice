
import { breathFirst } from '../breadthfirst';

describe('breathFirst', () => {
  const graph = {
    me: ['alice', 'bob', 'claire'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    peggy: ['anuj'],
    claire: [],
  };

  const isMangoSeller = (name) => name.startsWith('anu');
  test('OK case ', () => {
    expect(breathFirst('me', graph, isMangoSeller)).toEqual('anuj');
  });
});
