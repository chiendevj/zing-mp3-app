import React from 'react';
import ReactModal from 'react-modal';

// Ensure to set app element for accessibility
ReactModal.setAppElement('#root');

const ModalVideo = ({ src, onClose }) => {
    return (
        <ReactModal
            isOpen={!!src}
            onRequestClose={onClose}
            className="modal-content"
            overlayClassName="modal-overlay"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
        >
            <div className="relative w-full h-full">
               
                <video controls autoPlay className="w-full h-full">
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </ReactModal>
    );
};

export default ModalVideo;
