import { describe, it } from 'vitest';
// @ts-expect-error err
import AoLoader from '@permaweb/ao-loader';

import fs from 'fs';
const wasm = fs.readFileSync('./bin/process.wasm');

describe('Basic Addition', () => {
  it('Should add two numbers', async () => {
    const file = fs.readFileSync('./src/init.lua', 'utf-8');
    const handle = await AoLoader(wasm, {
      format: 'wasm32-unknown-emscripten2',
      inputEncoding: 'JSON-1',
      outputEncoding: 'JSON-1',
      memoryLimit: '524288000',
      computeLimit: (9e12).toString(),
      extensions: [],
    });

    const env = {
      Process: {
        Id: 'AOS',
        Owner: 'FOOBAR',
        Tags: [{ name: 'Name', value: 'Thomas' }],
      },
    };
    const msg = {
      Target: 'AOS',
      Owner: 'FOOBAR',
      ['Block-Height']: '1000',
      Id: '1234xyxfoo',
      Module: 'WOOPAWOOPA',
      Tags: [{ name: 'Action', value: 'Eval' }],
      Data: file,
    };
    const result = await handle(null, msg, env);
    console.log(result);
  });
});
