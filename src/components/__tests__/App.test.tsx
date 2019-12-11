import React from "react";
import {shallow} from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

/**
 * In this test suite for the App component, we must make sure that it:
 * 1: Has a CommentBox component inside of it
 * 2: Has a CommentList component inside of it
 */

let wrapped:any;

beforeEach(()=>{
    wrapped = shallow(<App/>);
})

it('shows a comment box',() => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list',() => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});