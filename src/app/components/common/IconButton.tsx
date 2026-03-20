import React from 'react'

type IconButtonProps = {
  icon: string;
  ariaLabel: string;
  onClick: () => void;
}

function IconButton ({ icon, ariaLabel, onClick }: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  )
}

export default IconButton