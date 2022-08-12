import { INITIAL_PAGE } from "../constants/context";

const getPageFromUri = (uri: string | null): number => {
    let pageNum = Number(uri?.split('=')[1])
    if (!pageNum)
        return INITIAL_PAGE
    return pageNum
}

export { getPageFromUri }