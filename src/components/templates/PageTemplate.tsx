import { Grid, GridItem } from "@chakra-ui/react";
import { CarouselGrid } from "../molecules/carousel/Carousel";

const PageTemplate = (): JSX.Element => {
  return (
    <Grid
      h="100%"
      paddingTop="2px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={2}
    >
      <GridItem
        colSpan={5}
        rowSpan={1}
        bg="tomato"
        placeItems={"center"}
        children={<CarouselGrid />}
      />
      <GridItem
        colSpan={5}
        rowSpan={1}
        bg="tomato"
        placeItems={"center"}
        children={"detalle"}
      />
      <GridItem colSpan={5} bg="papayawhip" />
    </Grid>
  );
};

export { PageTemplate };
