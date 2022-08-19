import { createContext, useReducer } from "react";
import { defaultUIContextValue, defaultUIState } from "../../common/constants/context";
import { ContextValue, UIState } from "../../common/models/entities";
import UIReducer from "./UIReducer";

const UIContext = createContext<ContextValue<UIState>>(defaultUIContextValue);

const UIProvider = ({ children }: any) => {
  /* const [state, dispatch] = useReducer(UIReducer, defaultUIState); */
  /* const value = { state, dispatch }; */
  return <UIContext.Provider value={defaultUIContextValue}>{children}</UIContext.Provider>;
};

export { UIProvider };
