import React from 'react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MobileMenu = ({ open, onClose, children }: MobileMenuProps) => {
  if (!open) return null;
  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50"
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" aria-hidden="true" />

      <button 
        onClick={onClose} 
        className="fixed inset-0 w-full h-full cursor-default"
        aria-label="Close menu"
      />

      <div className="relative flex items-center justify-center h-full">
        <div
          className="bg-white rounded-lg w-10/12 max-w-sm shadow-lg p-6 min-h-72 relative"
          role="document"
        >
          <div className='flex items-center justify-center'>
            <button
              className="absolute top-4 right-4 text-2xl text-primary border aspect-square w-8 border-primary rounded flex justify-center items-center cursor-pointer"
              onClick={onClose}
              aria-label="Fechar menu"
            >
              &times;
            </button>
            <h2 className='text-center text-2xl mb-6 font-medium text-primary'>Menu</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
