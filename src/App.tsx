import React from "react";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { Layout } from "./UI/layout/Layout";
import { QueryProvider } from "./context/query/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </QueryProvider>
  );
}

export default App;
