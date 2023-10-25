// not used in this project
// but can be used to set default options for react-query
// for future updates
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 1 minute
    },
  },
});

export default queryClient;
