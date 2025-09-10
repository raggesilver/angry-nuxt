import { FetchError } from "ofetch";

export const isFetchError = (error: unknown): error is FetchError => {
  return !!error && error instanceof FetchError;
};
