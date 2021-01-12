import React from 'react';
import { object } from 'prop-types';

import css from './PostCard.module.css';

const PostCard = props => {
    const { post } = props;
    const { title, body } = post;

    return (
        <div className={css.root}>
            <div className={css.postImage} />

            <div className={css.body}>
                <h3 className={css.title}>{title}</h3>
                <div className={css.body}>{body}</div>
            </div>
        </div>
    )
};

PostCard.defaultProps = {
    post: null,
}

PostCard.propTypes = {
    post: object.isRequired,
}

export default PostCard;

