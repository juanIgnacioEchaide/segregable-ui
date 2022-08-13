import { INITIAL_PAGE } from "../constants/context";
import { SwapiResponse, UpdatePayload } from "../models/entities";

const getPageFromUri = (uri: string | null): number => {
    let pageNum = Number(uri?.split('page=')[1])
    if (!uri || !pageNum) {
        return INITIAL_PAGE
    } else {
        return pageNum
    }
}

const setUpdatePayload = (data: SwapiResponse<any>): UpdatePayload<any> => {
    return {
        currentPage: getPageFromUri(data?.next) - 1,
        nextPage: getPageFromUri(data?.next),
        prevPage: getPageFromUri(data?.previous),
        results: data?.results,
        nextUri: data?.next,
        prevUri: data?.previous,
    } as unknown as UpdatePayload<any>
}
export { getPageFromUri, setUpdatePayload }