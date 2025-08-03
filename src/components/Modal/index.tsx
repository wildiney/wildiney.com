
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
    <div className="rounded-md overflow-hidden aspect-video  border border-gray-300">
      <img src={thumbnailSrc} alt={alt} onClick={openModal} className="cursor-pointer transition w-full hover:opacity-70 " />
      {isOpen && (
        <div className="fixed z-50 left-0 top-0 w-full h-full overflow-auto  flex justify-center items-center  bg-white/30 backdrop-blur-xs" onClick={closeModal}>
          <div className="relative m-auto p-0 w-11/12 max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <span className="absolute top-4 right-4 text-2xl text-primary border aspect-square w-8 border-primary rounded flex justify-center items-center cursor-pointer  bg-white/70 backdrop-blur-xs" onClick={closeModal}>&times;</span>
            <img src={largeSrc} alt={alt} className="w-full h-auto rounded-lg overflow-hidden shadow-lg  border border-gray-300" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
