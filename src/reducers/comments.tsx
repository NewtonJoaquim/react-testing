import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

const INITIAL_STATE:string[] = [];

export default function(state=INITIAL_STATE, action:any){
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map((comment:any) => comment.name);
            return [...state, ...comments];
        default:
            return state;
    }
}