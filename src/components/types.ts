export interface RequestOptions {
  method: string;
  headers: {
    'Content-type': string;
    Authorization?: string;
  };
  body?: string;
};