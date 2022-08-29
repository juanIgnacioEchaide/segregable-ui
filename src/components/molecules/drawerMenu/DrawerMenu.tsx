import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { DrawerMenuProps } from "../../../common";
import { SIZE } from "../../../common/constants";
import { DrawerLinks, SearchMenu } from "../../atoms/DrawerMenu";

const DrawerMenu = ({
  isOpen,
  firstField,
  onOpen,
  onClose,
}: DrawerMenuProps) => {
  const [searchModuleOpen, setsearchModuleOpen] = useState<boolean>(false);

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
        {!searchModuleOpen && (
          <DrawerLinks
            searchModuleOpen={searchModuleOpen}
            setsearchModuleOpen={setsearchModuleOpen}
            size={SIZE.MOBILE}
          />
        )}
        {searchModuleOpen && (
          <DrawerBody>
            <SearchMenu setOpen={setsearchModuleOpen} />
          </DrawerBody>
        )}
        <DrawerFooter borderTopWidth="1px" />
      </DrawerContent>
    </Drawer>
  );
};

export { DrawerMenu };
