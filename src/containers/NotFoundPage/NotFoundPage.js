import React from 'react';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.root}>
            <div className={css.content}>
                <div className={css.number}>404</div>
                <h1 className={css.heading}>
                    Sorry, we couldn't find that page.
                </h1>
                <p className={css.description}>
                    We can't find the page you're looking for. Make sure you've typed in the URL correctly.
                </p>
            </div>
        </div>
    );
}

export default NotFoundPage;