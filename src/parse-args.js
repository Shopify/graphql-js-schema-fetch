import minimist from 'minimist';

export default function parseArgs(rawArgs) {
  const args = minimist(rawArgs, {default: {method: 'POST'}});

  if (args.help || !args.url) {
    return {showHelp: true};
  }

  const url = args.url;
  const method = args.method;
  const header = args.header || [];

  const headers = [].concat(header).reduce((headerAcc, argHeader) => {
    const pair = argHeader.split(':');

    headerAcc[pair[0].trim()] = pair[1].trim();

    return headerAcc;
  }, {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  return {url, method, headers};
}
