import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PostsPageComponent } from './PostsPage';

describe('PostsPage', () => {
    it('matches snapshot', () => {
        const posts = [
            {
                "postId": 1,
                "id": 1,
                "comments": [],
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "comments": [],
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
            {
                "postId": 1,
                "id": 3,
                "comments": [],
                "name": "odio adipisci rerum aut animi",
                "email": "Nikita@garfield.biz",
                "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            },
        ];
        const props = {
            posts,
            fetchPostsInProgress: false,
            fetchPostsError: {},
            onFetchPosts: () => { return Promise.resolve({}) },
            onFetchComments: () => () => { return Promise.resolve({}) },
            onAddComment: () => null
        }
        const tree = toJson(mount(<PostsPageComponent {...props} />), { mode: 'deep' });
        expect(tree).toMatchSnapshot();
    })
});