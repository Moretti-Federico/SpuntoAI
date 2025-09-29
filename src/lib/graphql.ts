import { GraphQLClient, RequestDocument, Variables } from 'graphql-request'

const endpoint = import.meta.env.WP_GRAPHQL_ENDPOINT || 'https://example.com/graphql'

export async function fetchGraphQL<T = any>(query: RequestDocument, variables?: Variables): Promise<T> {
  const client = new GraphQLClient(endpoint, {
    headers: {}
  })
  return client.request<T>(query, variables)
}
