import { Box } from "@chakra-ui/react";
import { HeaderLegend } from "../atoms/Text";
import { HamburgerIcon } from "@chakra-ui/icons";

const TopBanner = ({ isOpen, onOpen, onClose }: any): JSX.Element => {
  const handleOpen = () => {
    return !isOpen ? onOpen() : onClose();
  };
  return (
    <Box>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "70px",
          color: "white",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginLeft: "10px",
          }}
          onClick={() => handleOpen()}
        >
          <HamburgerIcon w={6} h={6} />
        </div>
        <HeaderLegend />
      </div>
    </Box>
  );
};

export { TopBanner };
