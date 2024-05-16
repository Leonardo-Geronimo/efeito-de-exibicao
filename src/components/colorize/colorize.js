import React from 'react';
import './colorize.css';

const Colorizer = ({children, color}) => {
    return (
        <div className='colorize' style={{backgroundColor: color}}>
            {children}
        </div>
    )
}

Colorizer.defaultProps = {
    color: 'green'
}

export default Colorizer;