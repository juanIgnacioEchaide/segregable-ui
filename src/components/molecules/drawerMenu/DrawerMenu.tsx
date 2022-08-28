import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { ROUTES } from "../../../common/constants";
import { DrawerLinks, SearchInput } from "../../atoms/DrawerMenu";

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
        <DrawerLinks />
        <DrawerBody>
          <SearchInput />
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { DrawerMenu };
