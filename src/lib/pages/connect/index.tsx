import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import type { InputProps, SelectProps } from "@chakra-ui/react";
import {
  Grid,
  VStack,
  useDisclosure,
  Button,
  Text,
  HStack,
  Select,
  Input,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  useConnect,
  useAccount,
  useNetwork,
  useSwitchNetwork,
  useSignMessage,
} from "wagmi";

import { networkParams } from "../../utils/networks";
import { toHex, truncateAddress } from "../../utils/utils";

import SelectWalletModal from "./Modal";
/*
https://wagmi.sh/examples/connect-wallet
https://wagmi.sh/examples/connect-wallet
*/
const Home = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [networkId, setNetworkId] = useState<number>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    address,
    connector: activeConnector,
    isConnecting,
    isDisconnected,
    isConnected,
  } = useAccount();

  const {
    connect,
    connectors,
    error: connectError,
    isLoading,
    pendingConnector,
  } = useConnect();

  const { chain, chains } = useNetwork();
  const {
    // chains,
    data,
    error: switchError,
    // isError,
    // isIdle,
    // // isLoading,
    // isSuccess,
    // pendingChainId,
    switchNetwork,
    // switchNetworkAsync,
    // status,
    // reset,
  } = useSwitchNetwork({
    chainId: chain?.id,
    // onError(error) { },
    // onMutate(args) { },
    // onSettled(data, error) { },
    // onSuccess(data) { }
  });
  const { data: signData, signMessage } = useSignMessage({
    message,
  });

  const handleNetwork: SelectProps["onChange"] = (e) => {
    const id = e.target.value;
    setNetworkId(Number(id));
  };

  const handleInput: InputProps["onChange"] = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  return (
    <Grid gap={4}>
      <div>
        {isConnected && <div>Connected to {activeConnector?.name}</div>}

        {connectors.map((connector) => (
          <button
            type="button"
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {isLoading &&
              pendingConnector?.id === connector.id &&
              " (connecting)"}
          </button>
        ))}

        {connectError && <div>{connectError.message}</div>}
      </div>
      <VStack justifyContent="center" alignItems="center" h="100vh">
        <HStack marginBottom="10px">
          <Text
            margin="0"
            lineHeight="1.15"
            fontSize={["1.5em", "2em", "3em", "4em"]}
            fontWeight="600"
          >
            Let's connect with
          </Text>
          <Text
            margin="0"
            lineHeight="1.15"
            fontSize={["1.5em", "2em", "3em", "4em"]}
            fontWeight="600"
            sx={{
              background: "linear-gradient(90deg, #1652f0 0%, #b9cbfb 70.35%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Wagmi
          </Text>
        </HStack>
        <HStack>
          {!isConnected ? (
            <Button onClick={onOpen}>Connect Wallet</Button>
          ) : (
            <Button
              onClick={() => {
                // disconnect()
              }}
            >
              Disconnect
            </Button>
          )}
          {/* if (isConnecting) return <div>Connecting…</div>
  if (isDisconnected) return <div>Disconnected</div>
  return <div>{address}</div> */}
        </HStack>
        <VStack justifyContent="center" alignItems="center" padding="10px 0">
          <HStack>
            <Text>{`Connection Status: `}</Text>
            {isConnected ? (
              <CheckCircleIcon color="green" />
            ) : (
              <WarningIcon color="#cd5700" />
            )}
          </HStack>

          {!address ? (
            <Text>Account: No Account</Text>
          ) : (
            <Tooltip label={address} placement="right">
              <Text>{`Account: ${truncateAddress(address)}`}</Text>
            </Tooltip>
          )}
          <Text>{`Network ID: ${chain ? chain.id : "No Network"}`}</Text>
        </VStack>
        {isConnected && (
          <HStack justifyContent="flex-start" alignItems="flex-start">
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              padding="10px"
            >
              <VStack>
                <Button
                  onClick={() => {
                    if (networkId) switchNetwork?.(networkId);
                  }}
                  isDisabled={!networkId}
                >
                  Switch Network
                </Button>
                <Select placeholder="Select network" onChange={handleNetwork}>
                  <option value="3">Ropsten</option>
                  <option value="4">Rinkeby</option>
                  <option value="42">Kovan</option>
                  {/* <option value="1666600000">Harmony</option> */}
                  {/* <option value="42220">Celo</option> */}
                </Select>
              </VStack>
            </Box>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              padding="10px"
            >
              <VStack>
                <Button
                  onClick={async () => signMessage()}
                  isDisabled={!message}
                >
                  Sign Message
                </Button>
                <Input
                  placeholder="Set Message"
                  maxLength={20}
                  onChange={handleInput}
                  w="140px"
                />
                {signData ? (
                  <Tooltip label={signData} placement="bottom">
                    <Text>{`Signature: ${truncateAddress(signData)}`}</Text>
                  </Tooltip>
                ) : null}
              </VStack>
            </Box>
          </HStack>
        )}
        {/* <Text>{error ? error.message : null}</Text> */}
      </VStack>
      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </Grid>
  );
};

export default Home;
