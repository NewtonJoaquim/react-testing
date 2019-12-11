import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

/**
 * We must make sure that the CommentBox component:
 * 1: Shows a text area and a button
 * 2: Let users enter input into the text area
 * 3: Clears the text area when the input is submitted
 */

let wrapped:any;

beforeEach(() => {
    wrapped = mount(<CommentBox/>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea')).toHaveLength(1);
    expect(wrapped.find('button')).toHaveLength(1);

     /**
      * NOTE this is equivalent to writing
      * expect(wrapped.find("textarea").length).toEqual(1);
      * expect(wrapped.find("button")).toEqual(1);
      */
});

it('let users enter input into the text area', () => {
    //For this test we will find the textarea element  
    wrapped.find('textarea')
        .simulate('change',                     //simulate a change event 
        { target:{value: 'new comment'} } );    //provide a fake event object
    
    //force the component to update
    wrapped.update();
    
    //and then assert that the textarea value has changed
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('clears the text area when the input is submitted', () => {
    //For this test we will find the textarea element  
    wrapped.find('textarea')
        .simulate('change',                     //simulate a change event 
        { target:{value: 'new comment'} } );    //provide a fake event object
    
    //force the component to update
    wrapped.update();

    //check if the text area value really changed
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    //simulate a form submit event
    wrapped.find('form').simulate('submit');
    wrapped.update();

    //and then assert that the textarea value has been cleared after the submit
    expect(wrapped.find('textarea').prop('value')).toHaveLength(0);
});

