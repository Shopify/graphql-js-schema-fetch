#!/usr/bin/env node

import parseArgs from './parse-args';
import fetchSchema from './index';
import help from './help';

const args = parseArgs(process.argv.slice(2));

if (args.showHelp) {
  console.log(help);
  process.exit(0);
}

fetchSchema(args.url, args.method, args.headers).then((schema) => {
  console.log(JSON.stringify(schema));
}).catch((error) => {
  console.error(error);
});
