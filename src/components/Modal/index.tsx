
import { useState } from 'react';

interface ModalProps {
  thumbnailSrc: string;
  largeSrc: string;
  alt: string;
}

const Modal = ({ thumbnailSrc, largeSrc, alt }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="rounded-md overflow-hidden aspect-video border border-gray-300">
      <button onClick={openModal} className="cursor-pointer transition w-full hover:opacity-70">
        <img src={thumbnailSrc} alt={alt} className="w-full" />
      </button>
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed z-50 inset-0"
        >
          <div className="fixed inset-0 bg-white/30 backdrop-blur-xs" aria-hidden="true" />

          <button 
            onClick={closeModal} 
            className="fixed inset-0 w-full h-full cursor-default"
            aria-label="Close modal"
          />

          <div className="relative m-auto p-0 w-11/12 max-w-6xl flex items-center justify-center h-full">
            <div className="relative" role="document">
              <button 
                onClick={closeModal} 
                className="absolute top-4 right-4 text-2xl text-primary border aspect-square w-8 border-primary rounded flex justify-center items-center cursor-pointer bg-white/70 backdrop-blur-xs z-10"
                aria-label="Close modal"
              >
                &times;
              </button>
              <img id="modal-title" src={largeSrc} alt={alt} className="w-full h-auto rounded-lg overflow-hidden shadow-lg  border border-gray-300" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
