import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ClientSearch from "./ClientSearch";
import Search from "./Search";
import theme from "./theme";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Search/>
      <ClientSearch/>
    </ChakraProvider>
  )
}

export default App
