import { ChakraProvider } from "@chakra-ui/react";
import { getDefaultProvider } from "ethers";
import { BrowserRouter as Router } from "react-router-dom";
import { WagmiConfig, createClient } from "wagmi";

import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/customTheme";

// import { connectors } from "./connectors";
// https://wagmi.sh/docs/migration-guide#provider 0.2.12
// <WagmiProvider autoConnect connectors={connectors}></WagmiProvider>

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
