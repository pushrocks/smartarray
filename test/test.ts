import { expect, tap } from '@pushrocks/tapbundle';
import * as smartarray from '../ts/index';

tap.test('first test', async () => {
  console.log(smartarray.standardExport);
});

tap.start();
