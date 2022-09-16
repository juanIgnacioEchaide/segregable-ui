import { Box } from "@chakra-ui/react";
import { HeaderLegend } from "../atoms/Text";
import { HamburgerIcon } from "@chakra-ui/icons";
import UseQueryContext from "../../hooks/UseQueryContext";
import UseUIContext from "../../hooks/UseUIContext";
import { isMobile } from "../../common";
import { useEffect, useMemo, useState } from "react";
import { VIEW } from "../../common/constants/uri";

const TopBanner = ({ isOpen, onOpen, onClose }: any): JSX.Element => {
  const handleOpen = () => {
    return !isOpen ? onOpen() : onClose();
  };
  const [viewTitle, setViewTitle] = useState<VIEW>(VIEW.DEFAULT);
  const { view } = UseQueryContext();
  const { viewport } = UseUIContext();

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
            marginLeft: "15px",
          }}
          onClick={() => handleOpen()}
        >
          <HamburgerIcon w={6} h={6} />
        </div>
        <p
          style={{
            marginLeft: /* isMobile(viewport) ? */ "15px" /* : "100px" */,
          }}
        >
          {view}
        </p>
        <HeaderLegend />
      </div>
    </Box>
  );
};

export { TopBanner };
