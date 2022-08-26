import { BaseProps } from "../../common/models/props";
import { Box } from "@chakra-ui/react";
import { SIZE } from "../../common/constants/media";

const BaseBox = ({ children, width, height, bg, size }: BaseProps) => {
  const isMobile = () => {
    return size === SIZE.MOBILE;
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      {children}
    </div>
  );
};

export { BaseBox };
