import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import { Form, Field } from 'react-final-form'

import css from './AddCommentForm.module.css';

const AddCommentForm = props => {

    return (
        <Form
            {...props}
            render={renderProps => {

                const {
                    className,
                    handleSubmit,
                    form
                } = renderProps;

                const classes = classNames(css.root, className);

                return (
                    <form onSubmit={values => handleSubmit(values, form)} className={classes}>
                        <h2>Add a comment</h2>
                        <div className={css.container}>
                            <Field
                                className={css.field}
                                name="name"
                                component="input"
                                placeholder="Name"
                            />
                            <Field
                                className={css.field}
                                name="email"
                                component="input"
                                placeholder="Email"
                                type="email"
                            />
                            <Field
                                className={css.field}
                                name="body"
                                component="textarea"
                                placeholder="Type a comment..."
                                rows={2}
                            />
                        </div>
                        <button className={css.submit}>Send</button>
                    </form>
                );
            }}
        />
    )
};

AddCommentForm.defaultProps = {
    className: null
}

AddCommentForm.propTypes = {
    className: string
}

export default AddCommentForm;

