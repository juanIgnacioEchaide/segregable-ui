import { Grid, GridItem } from "@chakra-ui/react";
import { BaseBox } from "../atoms/Box";
import {
  NavigationGrid,
  DetailsDisplayGrid,
} from "../molecules/carousel/Carousel";

const PageTemplate = ({ viewport }: any): JSX.Element => {
  const TestCompo = ({ children }: any) => {
    return <BaseBox bg={"#eeee"} rounded pb={100}>{children}</BaseBox>;
  };

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
        h={"100px"}
        bg="tomato"
        placeItems={"center"}
        children={<TestCompo><p>hola</p><p>chau</p><p>me fui</p></TestCompo>}
      />
      <GridItem
        colSpan={5}
        rowSpan={6}
        bg="tomato"
        placeItems={"center"}
        children={<DetailsDisplayGrid viewport={viewport} />}
      />
    </Grid>
  );
};

export { PageTemplate };
