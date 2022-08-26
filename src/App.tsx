import React from "react";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { Layout } from "./components/layout/Layout";
import { Providers } from "./context/Providers";

function App() {
  return (
    <Providers>
      <Layout>
        <AppRouter />
      </Layout>
    </Providers>
  );
}

export default App;
