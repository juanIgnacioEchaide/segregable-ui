import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./AppRouter";
import { Layout } from "./components/layout/Layout";
import { QueryProvider } from "./context/query/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <ChakraProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </ChakraProvider>
    </QueryProvider>
  );
}

export default App;
