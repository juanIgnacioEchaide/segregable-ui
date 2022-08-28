export type {
    People,
    Planet,
    Starship,
    BaseState,
    PagesPayload,
    SwapiResponse
} from './models/entities'

export { URI } from './constants/uri'

export type { BaseProps, MapItemsProps, DrawerMenuProps, DrawerLinksProps } from './models/props'

export { defaultState, defaultContextValue, ActionType } from './constants/context'

export {
    getPageFromUri,
    getLocationPath,
    setUpdatePayload,
    updateAfterLoad,
    updateDisplayed,
    isMobile,
    navigate
} from './utils/helpers'