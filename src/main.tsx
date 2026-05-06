import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
