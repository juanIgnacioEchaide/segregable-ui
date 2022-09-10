import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ArrowsContainer = ({ children }: any) => {
  return (
    <>
      <IconButton
        aria-label="Search database"
        icon={<ArrowLeftIcon />}
        h={"20px"}
      />
      <motion.div
        className="box"
        animate={{ x: 0, y: 0 }}
        transition={{ type: "spring" }}
      >
        {children}
      </motion.div>
      <IconButton
        aria-label="Search database"
        icon={<ArrowRightIcon />}
        h={"20px"}
      />
    </>
  );
};

const PageIndex = ({ pageNum }: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px",
        fontSize: "30px",
        width: "100%",
        height: "100%",
      }}
    >
      <p
        style={{
          paddingRight: "5px",
        }}
      >
        Page:
      </p>
      {pageNum}
    </div>
  );
};

const DisplayedItem = ({ displayedData }: any) => {
  return <div>{displayedData}</div>;
};

const CarouselGrid = ({ pageNum, displayedData }: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px",
        fontSize: "30px",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
          fontSize: "30px",
          width: "30%",
          height: "100%",
        }}
      >
        <ArrowsContainer children={<PageIndex pageNum={"4"} />} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
          fontSize: "30px",
          width: "70%",
          height: "100%",
        }}
      >
        <ArrowsContainer
          children={
            <DisplayedItem displayedData={"Episode IV. New Hope Risin'"} />
          }
        />
      </div>
    </div>
  );
};
export { CarouselGrid };
