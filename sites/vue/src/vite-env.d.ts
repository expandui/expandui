/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >
  export default component
}
