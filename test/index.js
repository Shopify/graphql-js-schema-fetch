import assert from 'assert';
import parseArgs from '../src/parse-args';

suite('This will test arg parsing', () => {
  test('it indicates `showHelp` and skips all other args when the help flag is passed', () => {
    const args = parseArgs(['--header', 'some-header: data', '--help', '--url', 'www.com']);

    assert.deepEqual(args, {showHelp: true});
  });

  test('it indicates `showHelp` if required args aren\'t present', () => {
    const args = parseArgs(['--header', 'Authorization: Basic abc123', '--method', 'post']);

    assert.deepEqual(args, {showHelp: true});
  });

  test('it transforms single header args into a hash', () => {
    const args = parseArgs(['--header', 'Authorization: Basic abc123', '--url', 'www.com']);

    assert.equal(args.headers.Authorization, 'Basic abc123');
  });

  test('it transforms multi-header args into a hash', () => {
    const args = parseArgs(['--header', 'Authorization: Basic abc123', '--header', 'X-API-Key: token123', '--url', 'www.com']);

    assert.equal(args.headers.Authorization, 'Basic abc123');
    assert.equal(args.headers['X-API-Key'], 'token123');
  });

  test('it cleans up arbitrary whitespace in headers', () => {
    const args = parseArgs(['--header', '    Authorization:     Basic abc123     ', '--url', 'www.com']);

    assert.equal(args.headers.Authorization, 'Basic abc123');
  });

  test('it handles default headers only', () => {
    const args = parseArgs(['--url', 'www.com']);

    assert.deepEqual(args.headers.Accept, 'application/json');
    assert.deepEqual(args.headers['Content-Type'], 'application/json');
  });
});
