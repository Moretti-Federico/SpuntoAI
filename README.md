# SpuntoAI — Astro + WordPress (Headless) Prompt Library

Front-end Astro che consuma WPGraphQL da WordPress headless.

## Prerequisiti
- Node.js 18 o 20 (consigliato 20)
- WordPress con WPGraphQL
- (Facoltativo) CPT "Prompt" con ACF `promptFields.promptText` e `promptFields.model`

## Setup rapido
1. `cp .env.example .env` e imposta `WP_GRAPHQL_ENDPOINT`
2. `npm install`
3. `npm run dev` → http://localhost:4321

## Note
- Le query puntano al CPT `prompt`. Se usi `posts`, modifica `src/lib/queries.ts`.
