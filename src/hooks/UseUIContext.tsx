import { useContext } from "react";
import { UIContext } from "../context/UI/UIProvider";

const UseQueryContext = () => {
  const { state, dispatch } = useContext(UIContext);

  if ({ state, dispatch } === undefined) {
    throw new Error("context is unaccesible");
  }

  return {
    modalOn: state?.modalOn,
    modalTitle: state?.modalTitle,
    modalMessage: state?.modalMessage,
    modalImage: state?.modalImage,
    type: state?.type,
    viewport: state?.viewport,
    dispatch,
  };
};

export default UseQueryContext;
