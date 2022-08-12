import React from "react";
import "./App.css";
import { QueryProvider } from "./context/query/QueryProvider";
import { Search } from "./modules";

function App() {
  return (
    <QueryProvider>
      <Search />
    </QueryProvider>
  );
}

export default App;
