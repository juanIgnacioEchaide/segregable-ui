import React from "react";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { QueryProvider } from "./context/query/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}

export default App;
