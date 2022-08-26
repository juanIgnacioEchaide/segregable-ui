import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  DrawerFooter,
  Button,
  Box,
} from "@chakra-ui/react";
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
        <DrawerHeader borderBottomWidth="1px">
          Create a new account
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="username">Name</FormLabel>
              <Input
                ref={firstField}
                id="username"
                placeholder="Please enter user name"
              />
            </Box>

            <Box>
              <FormLabel htmlFor="url">Url</FormLabel>
              <InputGroup>
                <InputLeftAddon>http://</InputLeftAddon>
                <Input type="url" id="url" placeholder="Please enter domain" />
                <InputRightAddon>.com</InputRightAddon>
              </InputGroup>
            </Box>

            <Box>
              <FormLabel htmlFor="owner">Select Owner</FormLabel>
              <Select id="owner" defaultValue="segun">
                <option value="segun">Segun Adebayo</option>
                <option value="kola">Kola Tioluwani</option>
              </Select>
            </Box>

            <Box>
              <FormLabel htmlFor="desc">Description</FormLabel>
              <Textarea id="desc" />
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { DrawerMenu };
