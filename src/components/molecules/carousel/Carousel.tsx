import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { IconButton, Box } from "@chakra-ui/react";

/* const Carousel = () => {
  return (
    <div
      style={{
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        fontSize: "30px",
        width: "100%",
        height: "100%",
      }}
    >
      <IconButton aria-label="Search database" icon={<ArrowLeftIcon />} />
      <Box
        as="span"
        ml="2"
        background={"gray.600"}
        fontSize="sm"
        padding={"20px"}
      >
        Carousel
      </Box>
      <Box
        as="span"
        ml="2"
        background={"gray.600"}
        fontSize="sm"
        padding={"20px"}
      >
        Carousel
      </Box>
      <Box
        as="span"
        ml="2"
        background={"gray.600"}
        fontSize="sm"
        padding={"20px"}
      >
        Carousel
      </Box>
      <IconButton aria-label="Search database" icon={<ArrowRightIcon />} />
    </div>
  );
}; */

const Carousel = () => {
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
      <IconButton
        aria-label="Search database"
        icon={<ArrowLeftIcon />}
        h={"100px"}
      />
      <div
        style={{
          display: "flex",
          backgroundColor: "black",
          height:"20vh",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        carousel
      </div>

      <IconButton
        aria-label="Search database"
        icon={<ArrowRightIcon />}
        h={"100px"}
      />
    </div>
  );
};
export { Carousel };
