import fetch from 'node-fetch';
import {introspectionQuery} from 'graphql/utilities/introspectionQuery';

export default function fetchSchema(url, method = 'POST', headers = {}) {
  const body = JSON.stringify({query: introspectionQuery});

  return fetch(url, {
    method,
    headers,
    body
  }).then((response) => {
    return response.json();
  });
}
