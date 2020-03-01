import React from 'react';

import './PageTemplate.scss';
const PageTemplate = ({ children }) => {
    return (
        <div className='page'>
            {children}
        </div>
    );
};

export default PageTemplate;