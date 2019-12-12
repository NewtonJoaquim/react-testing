import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

/**For the CommentList component, we must ensure that:
 * 1: Shows one li element per comment
 * 2: Text from each comment is visible
 */

let wrapped: any;
let initialState:any

beforeEach(() => {
    initialState = {
        comments:['Comment 1', 'Comment 2']
    }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("shows one li element per comment", () => {
    expect(wrapped.find('li').length).toEqual(initialState.comments.length);
});

it("shows text from each comment", () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
})