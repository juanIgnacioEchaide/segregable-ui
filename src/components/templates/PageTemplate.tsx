import { Grid, GridItem } from "@chakra-ui/react";
import {
  NavigationGrid,
  DetailsDisplayGrid,
} from "../molecules/carousel/Carousel";

const PageTemplate = (): JSX.Element => {
  return (
    <Grid
      h="100%"
      paddingTop="2px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={2}
    >
      <GridItem
        colSpan={5}
        rowSpan={2}
        bg="tomato"
        placeItems={"center"}
        children={<NavigationGrid />}
      />
      <GridItem
        colSpan={5}
        rowSpan={6}
        bg="tomato"
        placeItems={"center"}
        children={<DetailsDisplayGrid />}
      />
    </Grid>
  );
};

export { PageTemplate };
