export const GET_PROMPTS = /* GraphQL */ `
  query GetPrompts($first: Int = 100, $after: String) {
    prompts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
      pageInfo { hasNextPage endCursor }
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage { node { sourceUrl altText } }
        tags { nodes { id name slug } }
        categories { nodes { id name slug } }
        content(format: RENDERED)
        ... on Prompt {
          promptFields {
            promptText
            model
          }
        }
      }
    }
  }
`;

export const GET_PROMPT_SLUGS = /* GraphQL */ `
  query GetPromptSlugs($first: Int = 100, $after: String) {
    prompts(first: $first, after: $after) {
      pageInfo { hasNextPage endCursor }
      nodes { slug }
    }
  }
`;

export const GET_PROMPT_BY_SLUG = /* GraphQL */ `
  query GetPromptBySlug($slug: ID!) {
    prompt(id: $slug, idType: SLUG) {
      id
      slug
      title
      content(format: RENDERED)
      date
      featuredImage { node { sourceUrl altText } }
      tags { nodes { id name slug } }
      categories { nodes { id name slug } }
      ... on Prompt {
        promptFields {
          promptText
          model
        }
      }
    }
  }
`;
