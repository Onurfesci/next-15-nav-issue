import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getConfig } from '@/config';

const baseQuery = fetchBaseQuery({
  baseUrl: getConfig('apiUrl'),
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery,
  refetchOnMountOrArgChange: true,
  tagTypes: ['ReferenceData'],
  endpoints: () => ({}),
});
