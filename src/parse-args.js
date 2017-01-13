import minimist from 'minimist';

export default function parseArgs(rawArgs) {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const args = minimist(rawArgs, {
    default: {
      method: 'POST',
      header: []
    }
  });

  if (args.help || !args.url) {
    return {showHelp: true};
  }

  const url = args.url;
  const method = args.method;

  const headers = [].concat(args.header).reduce((headerAcc, header) => {
    const pair = header.split(':');

    headerAcc[pair[0].trim()] = pair[1].trim();

    return headerAcc;
  }, defaultHeaders);

  return {url, method, headers};
}
