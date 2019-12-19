import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";
import Axios from "axios";

export function saveComment(comment: string){
    return{
        type:SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments(){
    const response = Axios.get('http://jsonplaceholder.typicode.com/comments');
    return{
        type:FETCH_COMMENTS,
        payload:response
    }
}