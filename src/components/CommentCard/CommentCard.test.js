import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CommentCard from './CommentCard';

describe('CommentCard', () => {
    it('matches snapshot', () => {
        const comment = {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }
        const tree = toJson(mount(<CommentCard {...comment} />), { mode: 'deep' });
        expect(tree).toMatchSnapshot();
    })
});