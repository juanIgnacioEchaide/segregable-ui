import React, { RefObject } from "react"
import { SIZE } from "../constants";
import { VIEW } from "../constants/uri";

type BaseProps = {
  children?: any | any[];
  view: VIEW;
  size: string;
  theme: string;
  height: string;
  width: string;
  bg: string;
}

interface MapItemsProps<T> extends BaseProps {
  items: T | T[]
}
type DrawerMenuProps = {
  isOpen: boolean,
  firstField?: RefObject<any>,
  onOpen: () => void,
  onClose: () => void,
}
type DrawerLinksProps = {
  searchModuleOpen: boolean;
  setsearchModuleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  size: SIZE;
};

export type { BaseProps, MapItemsProps, DrawerMenuProps, DrawerLinksProps }