import { useDisclosure } from "@chakra-ui/react";
import { DrawerMenu } from "../molecules/drawerMenu/DrawerMenu";
import { TopBanner } from "./TopBanner";

const Layout = ({ children }: any): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      style={{
        padding: "none",
      }}
    >
      <TopBanner isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <DrawerMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </div>
  );
};

export { Layout };
