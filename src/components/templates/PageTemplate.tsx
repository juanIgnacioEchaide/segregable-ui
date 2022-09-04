import { Grid, GridItem} from "@chakra-ui/react";

const PageTemplate = (): JSX.Element => {
  return (
    <Grid
      h="100%"
      paddingTop="10px"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={2}
    >
      <GridItem
        colSpan={5}
        rowSpan={2}
        bg="tomato"
        placeItems={"center"}
      /*   children={<Carousel />} */
      />
      <GridItem colSpan={5} h="100px" bg="papayawhip" />
      <GridItem colSpan={5} bg="papayawhip" />
    </Grid>
  );
};

export { PageTemplate };
