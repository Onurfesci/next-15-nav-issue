import { FetchBaseQueryError, SerializedError } from '@reduxjs/toolkit/query';

declare global {
  type WithId<T> = {
    id: string;
    body: T;
  };

  type QueryError = FetchBaseQueryError | SerializedError;
}
