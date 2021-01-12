import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import css from './PostsPage.module.css';

export class PostsPageComponent extends React.Component {

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
}

PostsPageComponent.propTypes = {
}

const mapStateToProps = state => {

    return {
    }
}

const mapDispatchToProps = dispatch => ({
})

const PostsPage = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ))(PostsPageComponent);

export default PostsPage;

