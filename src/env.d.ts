/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly WP_GRAPHQL_ENDPOINT: "https://spuntoai.instawp.xyz/graphql"
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
