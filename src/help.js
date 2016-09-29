export default `
usage: graphql-js-schema-fetch --url my-api.com [--method=POST] [--header="...", --header="..."]

Fetch the json representation of a GraphQL Schema from a live server.

arguments:
 --url               The URL where you GraphQL API resides.
 --method            The HTTP method to use during the fetch (default: 'POST')
 --header[,--header] Any headers to send along with the request. Specify this
                     option multiple times for multiple headers. (example:
                     --header "Authorization: Basic abc123" --header "X-Version: 1")
`;
