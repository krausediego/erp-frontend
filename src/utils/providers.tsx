"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const client = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
