import { Box, UseDisclosureProps } from "@chakra-ui/react";
import {
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { useConnect } from "wagmi";

export default function SelectWalletModal({
  isOpen = false,
  closeModal,
}: UseDisclosureProps & {
  closeModal: () => void;
}) {
  const { data, error, connect } = useConnect();
  const t = (t: string) => t;
  const handleconnectWallet = (t: string) => {
    console.log(t);
  };
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent w="300px">
        <ModalHeader>Select Wallet</ModalHeader>
        <ModalCloseButton
          _focus={{
            boxShadow: "none",
          }}
        />
        <ModalBody paddingBottom="1.5rem">
          <VStack>
            <Button
              variant="outline"
              onClick={() => {
                // connect(data?.connectors?.[0]);
                closeModal();
              }}
              w="100%"
            >
              <HStack w="100%" justifyContent="center">
                <Image
                  src="/images/wallets/coinbase_wallet.png"
                  alt="Coinbase Wallet Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                />
                <Text>Coinbase Wallet</Text>
              </HStack>
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                // connect(data.connectors[1]);
                closeModal();
              }}
              w="100%"
            >
              <HStack w="100%" justifyContent="center">
                <Image
                  src="/images/wallets/walletconnect.png"
                  alt="Wallet Connect Logo"
                  width={26}
                  height={26}
                  borderRadius="3px"
                />
                <Text>Wallet Connect</Text>
              </HStack>
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                // connect(data.connectors[3]);
                closeModal();
              }}
              w="100%"
            >
              <HStack w="100%" justifyContent="center">
                <Image
                  src="/images/wallets/metamask.png"
                  alt="Metamask Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                />
                <Text>Metamask</Text>
              </HStack>
            </Button>
          </VStack>
          <Box display={"none"}>
            <div className="inline-block w-2/6 my-2 p-2.5 text-center">
              <div
                className="cursor-pointer"
                onClick={() => handleconnectWallet("metamask")}
              >
                <img
                  src="/images/wallets/metamask.png"
                  className="w-10 mx-auto mb-2"
                  alt=""
                />
                <span className="text-white font-medium">Metamask</span>
              </div>
            </div>
            <div className="inline-block w-2/6 my-2 p-2.5 text-center">
              <div
                className="cursor-pointer"
                onClick={() => handleconnectWallet("walletConnect")}
              >
                <img
                  src="/images/wallets/walletconnect.png"
                  className="w-10 mx-auto mb-2"
                  alt=""
                />
                <span className="text-white font-medium">WalletConnect</span>
              </div>
            </div>
            <div className="inline-block w-2/6 my-2 p-2.5 text-center">
              <div
                className="cursor-pointer"
                onClick={() => handleconnectWallet("coin98")}
              >
                <img
                  src="/images/wallets/coin98.png"
                  className="w-10 mx-auto mb-2"
                  alt=""
                />
                <span className="text-white font-medium">Coin98</span>
              </div>
            </div>
            <div className="inline-block w-2/6 my-2 p-2.5 text-center">
              <div
                className="cursor-pointer"
                onClick={() => handleconnectWallet("onto")}
              >
                <img
                  src="/images/wallets/onto.png"
                  className="w-10 mx-auto mb-2"
                  alt=""
                />
                <span className="text-white font-medium">ONTO</span>
              </div>
            </div>
            <div className="inline-block w-2/6 my-2 p-2.5 text-center">
              <div
                className="cursor-pointer"
                onClick={() => handleconnectWallet("tokenpocket")}
              >
                <img
                  src="/images/wallets/tokenpocket.png"
                  className="w-10 mx-auto mb-2"
                  alt=""
                />
                <span className="text-white font-medium">Token Pocket</span>
              </div>
            </div>
            <div className="inline-block w-2/6 my-2 p-2.5 text-center">
              <div
                className="cursor-pointer"
                onClick={() => handleconnectWallet("coinbaseWallet")}
              >
                <img
                  src="/images/wallets/coinbase_wallet.png"
                  className="w-10 mx-auto mb-2"
                  alt=""
                />
                <span className="text-white font-medium">Coinbase</span>
              </div>
            </div>
            <div className="inline-block w-2/6 my-2 p-2.5 text-center">
              <div
                className="cursor-pointer"
                onClick={() => handleconnectWallet("mathWallet")}
              >
                <img
                  src="/images/wallets/mathwallet.png"
                  className="w-10 mx-auto mb-2"
                  alt=""
                />
                <span className="text-white font-medium">Math Wallet</span>
              </div>
            </div>
            <div className="inline-block w-2/6 my-2 p-2.5 text-center">
              <div
                className="cursor-pointer"
                onClick={() => handleconnectWallet("bitkeep")}
              >
                <img
                  src="/images/wallets/bitkeep.png"
                  className="w-10 mx-auto mb-2"
                  alt=""
                />
                <span className="text-white font-medium">BitKeep</span>
              </div>
            </div>
            {/* <div className="inline-block w-2/6 my-2 p-2.5 text-center">
            <div className="cursor-pointer" onClick={() => handleconnectWallet('safepal')}>
              <img src="/images/wallets/safepal.png" className="w-10 mx-auto mb-2" alt="" />
              <span className="text-white font-medium">SafePal</span>
            </div>
          </div> */}
            <div className="inline-block w-2/6 my-2 p-2.5 text-center">
              <div
                className="cursor-pointer"
                onClick={() => handleconnectWallet("trustWallet")}
              >
                <img
                  src="/images/wallets/trustwallet.png"
                  className="w-10 mx-auto mb-2"
                  alt=""
                />
                <span className="text-white font-medium">Trust Wallet</span>
              </div>
            </div>
          </Box>
          {/* or login with email */}
          {/* or login with google */}
          {/* or login with facebook */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
