import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryProvider } from "./query/QueryProvider";
import { UIProvider } from "./UI/UIProvider";

const Providers = ({ children }: any): JSX.Element => {
  
  return (
    <QueryProvider>
      <UIProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </UIProvider>
    </QueryProvider>
  );
};

export { Providers };
