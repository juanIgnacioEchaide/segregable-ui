import { createContext, useEffect, useReducer } from "react";
import {
  defaultUIContextValue,
  defaultUIState,
} from "../../common/constants/context";
import { VIEW } from "../../common/constants/uri";
import { ContextValue, UIState } from "../../common/models/entities";
import { UseMedia } from "../../hooks/UseMedia";
import { UIActions } from "./UIActions";
import UIReducer from "./UIReducer";

const UIContext = createContext<ContextValue<UIState>>(defaultUIContextValue);

const UIProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UIReducer, defaultUIState);
  const size = UseMedia();

  useEffect(() => {
    if (size) {
      dispatch(UIActions.updateViewport(size as VIEW));
    }
  }, [size]);

  const value = { state, dispatch };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export { UIContext, UIProvider };
