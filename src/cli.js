#!/usr/bin/env node

import parseArgs from './parse-args';
import help from './help';
import fetchSchema from './index';

const args = parseArgs(process.argv.slice(2));

if (args.showHelp) {
  console.log(help);
  // eslint-disable-next-line no-process-exit
  process.exit(0);
}

fetchSchema(args.url, args.method, args.headers).then((schema) => {
  console.log(JSON.stringify(schema));
}).catch((error) => {
  console.error(error);
});
