import React from "react"
import Species from "../../pages/species/Species";
import Vehicles from "../../pages/vehicles/Vehicles";
import { VIEW } from "../constants/uri";
import { People } from "./entities";


type BaseProps = {
    children?: any | any[];
    view: VIEW;
    size: string;
    theme: string;
  }

  interface MapItemsProps<T> extends BaseProps {
    items: T | T[]
  } 

export type { BaseProps, MapItemsProps }