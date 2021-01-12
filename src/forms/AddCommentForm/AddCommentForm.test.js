import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddCommentForm from './AddCommentForm';

describe('AddCommentForm', () => {
    it('matches snapshot', () => {
        const props = {
            className: null,
            onSubmit: () => null,
        }
        const tree = toJson(mount(<AddCommentForm {...props} />), { mode: 'deep' });
        expect(tree).toMatchSnapshot();
    })
});