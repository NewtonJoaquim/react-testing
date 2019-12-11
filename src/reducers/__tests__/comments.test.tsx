import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

/**
 * For this test of our comments reducer, we must assert that it:
 * 1: handles actions of type SAVE_COMMENT
 * 2: doesnt throw an error if it gets and action with any other type
 */

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('doesnt throw an error if it gets and action with any other type', () => {
    const newState = commentsReducer([], {type:'iuyrtdastrtr'});

    expect(newState).toEqual([]);
})