import { UIActionType } from "../../common/constants/context";
import { VIEW } from "../../common/constants/uri";
import { ModalUpdate } from "../../common/models/entities";

const UIActions = {
  hideModal: () => ({ type: UIActionType.HideModal }),
  showWarning: (payload: any) => ({ type: UIActionType.ShowWarning, payload }),
  showSimpleDialogue: (payload: ModalUpdate) => ({
    type: UIActionType.ShowSimpleDialogue,
    payload,
  }),
  showStepperDialogue: (payload: ModalUpdate) => ({
    type: UIActionType.ShowStepperDialogue,
    payload,
  }),
  updateViewport: (payload: VIEW) => ({
    type: UIActionType.UpdateViewport,
    payload,
  }),
};

export { UIActions };
