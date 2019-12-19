import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

/**
 * NOTE This is an integrations test suite, where we will ensure the functionality of the Fetch Comments Button
 */

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name:'fetched #1'}, {name:'fetched #2'}, {name:'fetched #3'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('Can fetch a list of comments and display then', (done) => {
    //Attempt to render the entire app
    const wrapped = mount(<Root><App/></Root>)
    //find the fetch comments button and click it
    wrapped.find('.fetch-comments').simulate('click')
    //Introducing a delay for moxios to fetch the request
    moxios.wait(() => {
        wrapped.update();
        // expect to find a list of comments
        expect(wrapped.find('li').length).toEqual(3);
        done();
        wrapped.unmount();
    }); 
});