import React from 'react';
import { array, object, bool } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchPosts } from '../../ducks/posts.duck';

import css from './PostsPage.module.css';

export class PostsPageComponent extends React.Component {

    componentDidMount() {
        const { onFetchPosts } = this.props;
        onFetchPosts();
    }

    render() {

        return (
            <div className={css.page}>
                <div className={css.container}>
                    
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

    return {
        postRefs,
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

