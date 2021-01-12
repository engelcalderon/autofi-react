/**
 * PostsCard renders the information about a specific post like the title and body of it.
 * It also handles the action of sending data for a new comment and clearing the fields
 * of the form.
 * 
 */

import React, { useState } from 'react';
import { object, func } from 'prop-types';
import { CommentCard } from '../../components';
import { AddCommentForm } from '../../forms';

import css from './PostCard.module.css';

const PostCard = props => {

    const [showComments, setShowComments] = useState(false);

    const { post, onAddComment } = props;
    const { title, body, comments = [] } = post;

    const numberOfComments = `${comments.length} comments`;

    const handleOnSubmitComment = (values, form) => {
        onAddComment({
            postId: post.id,
            ...values
        }).then(() => {
            form.change('name', '');
            form.change('email', '');
            form.change('body', '');
        });
    };

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
                        <AddCommentForm
                            className={css.addCommentForm}
                            onSubmit={handleOnSubmitComment}
                        />
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
    onAddComment: func.isRequired
}

export default PostCard;

