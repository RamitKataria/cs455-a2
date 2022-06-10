import React from 'react';

const Modal = ({handleClose, children}) => {
    return (
        <div className='modal-overlay' onClick={handleClose}>
            <div className='modal-container' onClick={(e) => e.stopPropagation()}>
                <div className='modal-main'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;
