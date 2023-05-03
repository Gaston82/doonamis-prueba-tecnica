/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_SERIES_URL: string;
  readonly VITE_SERIES_DETAILS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
