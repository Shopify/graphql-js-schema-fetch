export default `
usage: graphql-js-schema-fetch [URL | --url] [--method=POST] [--header="...", --header="..."]

Fetch the json representation of a GraphQL Schema from a live server.

Arguments:
 --url               The URL where you GraphQL API resides.
 --method            The HTTP method to use during the fetch (default: 'POST')
 --header[,--header] Any headers to send along with the request. Specify this
                     option multiple times for multiple headers. (example:
                     --header "Authorization: Basic abc123" --header "X-Version: 1")

Examples:
  Fetch schema with default headers:
    graphql-js-schema-fetch https://api.example.com > schema.json

  Fetch schema with authorization header:
    graphql-js-schema-fetch https://api.example.com \
      --header "Authorization: Basic abc123" > schema.json

  Fetch schema with multiple headers:
    graphql-js-schema-fetch https://api.example.com \
      --header "Authorization: Basic abc123" \
      --header "X-Version: 1" > schema.json
`;
