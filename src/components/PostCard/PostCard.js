import React, { useState } from 'react';
import { object } from 'prop-types';
import { CommentCard } from '../../components';

import css from './PostCard.module.css';

const PostCard = props => {

    const [showComments, setShowComments] = useState(false);

    const { post } = props;
    const { title, body, comments = [] } = post;

    const numberOfComments = `${comments.length} comments`;

    return (
        <div className={css.root}>
            <div className={css.postImage} />

            <div className={css.body}>
                <h3 className={css.title}>{title}</h3>
                <div className={css.body}>{body}</div>
            </div>

            <div className={css.commentsContainer}>
                <span
                    className={css.commentsLabel}
                    onClick={() => setShowComments(!showComments)}>
                    {numberOfComments}
                </span>

                {showComments ? (
                    <React.Fragment>
                        {comments.map(comment => (
                            <CommentCard key={comment.id} {...comment} />
                        ))}
                    </React.Fragment>
                ) : null}

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

