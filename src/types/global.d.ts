declare interface ViteEnv {
  VITE_PORT: number;
  VITE_APP_AXIOS_TIMEOUT: number;
}

declare type Recordable<T = any> = Record<string, T>;

declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T;
};
