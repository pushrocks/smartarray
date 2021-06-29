import { expect, tap } from '@pushrocks/tapbundle';
import * as smartarray from '../ts/index';

tap.test('should filter', async () => {
  const originalArray = [1,2,3,4,5,6];
  expect(originalArray).to.contain(2);
  expect(originalArray).to.contain(3);
  const result = await smartarray.filter(originalArray, async itemArg => itemArg !== 3);
  expect(originalArray).to.contain(2);
  expect(result).to.not.contain(3);
  console.log(result);
});

tap.start();
