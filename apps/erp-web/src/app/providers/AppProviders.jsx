import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from './RouterProvider.jsx';

const queryClient = new QueryClient();

export function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider />
    </QueryClientProvider>
  );
}
