import { useContext, useState } from "react";
import { QueryContext } from "../context/query/QueryProvider";

const UseQueryContext = () => {
  const { state, dispatch } = useContext(QueryContext);
  if ({ state, dispatch } === undefined) {
    throw new Error("context is unaccesible");
  }
  const [UISettings, setUIsettings] = useState({});

  return {
    people: state?.people,
    planets: state?.planets,
    vehicles: state?.vehicles,
    species: state?.species,
    starship: state?.starship,
    films: state?.films,
    setUIsettings,
    UISettings,
  };
};

export default UseQueryContext;
