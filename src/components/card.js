import React from 'react';

const Card = ({handleOpen, children}) => {
    return(
        <div className='card' onClick={handleOpen}>
            {children}
        </div>
    )
}

export default Card;
