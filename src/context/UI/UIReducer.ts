import { ModalType, UIActionType } from "../../common/constants/context";
import { Action, UIState } from "../../common/models/entities";

const UIReducer = (state: UIState, action: Action): UIState => {
    switch (action.type) {
        case UIActionType.HideModal:
            return {
                ...state,
                modalOn: false,
                modalTitle: '',
                modalMessage: '',
                modalImage: '',
                type: ModalType.Default,
            }
        case UIActionType.ShowSimpleDialogue:
            return {
                ...state,
                modalOn: true,
                modalTitle: action.payload.title,
                modalMessage: action.payload.message,
                modalImage: action.payload.image,
                type: ModalType.SimpleDialogue,
            }
        case UIActionType.ShowStepperDialogue:
            return {
                ...state,
                modalOn: true,
                modalTitle: action.payload.title,
                modalMessage: action.payload.message,
                modalImage: action.payload.image,
                type: ModalType.StepperDialogue,
            }
        case UIActionType.ShowWarning:
            return {
                ...state,
                modalOn: true,
                modalTitle: action.payload.title,
                modalMessage: action.payload.message,
                modalImage: action.payload.image,
                type: ModalType.Warning,
            }
        case UIActionType.UpdateViewport:
            return {
                ...state,
                viewport: action.payload
            }
        default: return state
    }
}
export default UIReducer 