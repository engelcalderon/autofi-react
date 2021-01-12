import React from 'react';
import { array, object, bool } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchPosts } from '../../ducks/posts.duck';
import { fetchComments, COMMENT_ENTITY_TYPE } from '../../ducks/comments.duck';
import { getEntities } from '../../ducks/entities.duck';
import { PostCard } from '../../components';

import css from './PostsPage.module.css';

export class PostsPageComponent extends React.Component {

    componentDidMount() {
        const { onFetchPosts, onFetchComments } = this.props;
        onFetchPosts().then(() => onFetchComments());
    }

    render() {
        const {
            posts,
            fetchPostsInProgress,
            fetchPostsError,
        } = this.props;

        if (fetchPostsInProgress) return <span>Loading...</span>

        if (fetchPostsError) return <span>Error fetching posts</span>

        return (
            <div className={css.page}>
                <div className={css.container}>
                    {posts.map(post => (
                        <PostCard
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            </div>
        )
    }
};


PostsPageComponent.defaultProps = {
    posts: [],
    fetchPostsError: null
}

PostsPageComponent.propTypes = {
    posts: array,
    fetchPostsInProgress: bool.isRequired,
    fetchPostsError: object,
}

const mapStateToProps = state => {
    const {
        postRefs,
        fetchPostsInProgress,
        fetchPostsError
    } = state.posts;

    const posts = getEntities(state, postRefs);

    const commentEntityRefs = comments =>
        comments.map(id => ({ type: COMMENT_ENTITY_TYPE, id }));
    const uniqueComments = comments => comments.filter((v, i, a) => a.indexOf(v) === i);
    const postsWithComments = posts.map(p => ({
        ...p,
        comments: p.comments ? uniqueComments(getEntities(state, commentEntityRefs(p.comments))) : []
    }));

    return {
        posts: postsWithComments,
        fetchPostsInProgress,
        fetchPostsError
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchPosts: () => dispatch(fetchPosts()),
    onFetchComments: () => dispatch(fetchComments()),
})

const PostsPage = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ))(PostsPageComponent);

export default PostsPage;

