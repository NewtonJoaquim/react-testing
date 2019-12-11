import { SAVE_COMMENT } from "actions/types";

const INITIAL_STATE:string[] = [];

export default function(state=INITIAL_STATE, action:any){
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}