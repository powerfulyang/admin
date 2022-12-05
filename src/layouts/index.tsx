import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from '@umijs/max';
import type { FC } from 'react';

const queryClient = new QueryClient();

const Layout: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
};

export default Layout;
