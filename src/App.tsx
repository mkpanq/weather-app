import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-background h-screen w-screen flex flex-col">
        <Header />
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
