import {saveComment} from "actions";
import {SAVE_COMMENT} from "actions/types";

/**
 * For the action test we must make sure it:
 * 1: Has the correct type of SAVE_COMMENT
 * 2: Produces a payload with the correct text
 */

describe('saveComment', () => {
    let action:any;
    beforeEach(() => {
        action = saveComment('new comment');
    })

    it('has the correct type', () => {
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        expect(action.payload).toEqual('new comment');
    });
})