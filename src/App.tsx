import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/customTheme";

// import { connectors } from "./connectors";
// https://wagmi.sh/docs/migration-guide#provider 0.2.12
// <WagmiProvider autoConnect connectors={connectors}></WagmiProvider>

import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

const client = createClient({
  autoConnect: true,
  // connectors,
  // provider,
  provider: getDefaultProvider(),
});
const App = () => (
  <ChakraProvider theme={theme}>
    <WagmiConfig client={client}>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </WagmiConfig>
  </ChakraProvider>
);

export default App;
