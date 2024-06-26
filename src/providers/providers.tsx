"use client";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme";
import { QueryClientProvider } from "./query-client";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider>
        {children}
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
