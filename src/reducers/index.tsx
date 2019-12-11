import { combineReducers } from "redux";

import commentsReducer from "reducers/comments";

export default combineReducers<any>({
    comments: commentsReducer,
})