import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  FormLabel,
  Input,
  InputGroup,
  DrawerFooter,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ROUTES } from "../../../common/constants";

const DrawerMenu = ({ isOpen, firstField, onClose }: any) => {
  const navigateTo = (route: ROUTES) => {
    return window.location.assign(route);
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={firstField}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Swapi</DrawerHeader>

        <DrawerBody>
          {/*  <Stack spacing="24px"> */}
          <Box justifyContent={"center"} alignItems={"center"}>
            <FormLabel htmlFor="earch_param">Search</FormLabel>
            <InputGroup>
              <Input
                type="text"
                id="search_param"
                placeholder="Search freely"
              />
              <IconButton aria-label="Search database" icon={<SearchIcon />} />
            </InputGroup>
          </Box>
          {/* </Stack> */}
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { DrawerMenu };
