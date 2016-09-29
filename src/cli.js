#!/usr/bin/env node

import parseArgs from './parse-args';
import fetchSchema from './index';

const args = parseArgs(process.argv.slice(2));

fetchSchema(args.url, args.method, args.headers).then((schema) => {
  console.log(JSON.stringify(schema));
}).catch((error) => {
  console.error(error);
});
