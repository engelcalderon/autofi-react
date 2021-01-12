import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
    it('matches snapshot', () => {
        const props = {
        }
        const tree = toJson(mount(<NotFoundPage {...props} />), { mode: 'deep' });
        expect(tree).toMatchSnapshot();
    })
});