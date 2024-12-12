import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";
  const overlayStyle = isOpen ? "fixed inset-0 bg-black/50" : "hidden";

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className={modalStyle}>
      <div className={overlayStyle} onClick={handleCloseModal}></div>

      {/* The actual modal content */}
      <div className="bg-white shadow-lg z-10 w-[40vh] md:w-[40vh] lg:w-[65vh]">
        {/* Render the content inside the modal */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
