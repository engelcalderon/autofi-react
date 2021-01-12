/**
 * This is used along with the PostCard component. Represents each individual comment and 
 * its only function it's to render the information.
 * 
 */

import React from 'react';
import { string } from 'prop-types';

import css from './CommentCard.module.css';

const CommentCard = props => {
    const { name, body } = props;

    return (
        <div className={css.root}>
            <h3 className={css.name}>{name}</h3>
            <p className={css.body}>{body}</p>
        </div>
    )
};

CommentCard.defaultProps = {
    name: null,
    body: null
}

CommentCard.propTypes = {
    name: string.isRequired,
    body: string.isRequired
}

export default CommentCard;