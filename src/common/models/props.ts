import React, { RefObject } from "react"
import { SIZE } from "../constants";
import { VIEW } from "../constants/uri";

type BaseBoxProps = {
  children: any | any[];
  view?: VIEW;
  size?: string;
  theme?: string;
  h?: number;
  w?: number;
  fs?: number;
  bg?: string;
  column?: boolean;
  row?: boolean;
  rounded?: boolean;
  p?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  m?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  mode?: string;
  primary?: boolean;
  secondary?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  alignBaseLine?: boolean;
  alignStrecht?: boolean;
  placeItems?: string;
  justifyStart?: boolean;
  justifyend?: boolean;
  justifycenter?: boolean;
  justifySpaceBetween?: boolean;
  justifySpaceAround?: boolean;
  justifySpaceEvenly?: boolean;
}

interface MapItemsProps<T> extends BaseBoxProps {
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

type GridTemplateProps = {
  nav: any,
  main: any,
  details: any,
  side: any,
  footer: any,  
};

export type { 
  BaseBoxProps, 
  MapItemsProps, 
  DrawerMenuProps, 
  DrawerLinksProps, 
  GridTemplateProps 
}