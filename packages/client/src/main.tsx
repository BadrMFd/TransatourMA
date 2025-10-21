import {
   keepPreviousData,
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         gcTime: 30_000,
         throwOnError: false,
         refetchOnWindowFocus: false,
         refetchOnReconnect: 'always',
         refetchIntervalInBackground: false,
         placeholderData: keepPreviousData,
         networkMode: 'online',
         retry: 1,
      },
      mutations: {
         retry: 0,
         networkMode: 'online',
      },
   },
});

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
   </StrictMode>
);
