import React from "react"
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

export type { BaseProps, MapItemsProps }