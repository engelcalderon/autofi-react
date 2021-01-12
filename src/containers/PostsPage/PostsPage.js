import React from 'react';
import { array, object, bool } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchPosts } from '../../ducks/posts.duck';
import { getEntities } from '../../ducks/entities.duck';
import { PostCard } from '../../components';

import css from './PostsPage.module.css';

export class PostsPageComponent extends React.Component {

    componentDidMount() {
        const { onFetchPosts } = this.props;
        onFetchPosts();
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

    return {
        posts,
        fetchPostsInProgress,
        fetchPostsError
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchPosts: () => dispatch(fetchPosts()),
})

const PostsPage = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ))(PostsPageComponent);

export default PostsPage;

