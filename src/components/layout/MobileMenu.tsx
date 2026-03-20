'use client'

import { useState } from 'react'
import { clsx } from 'clsx'

interface MobileMenuProps {
  navLinks: { href: string; label: string }[]
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
      >
        <span className={clsx('w-5 h-px bg-ink transition-all', open && 'rotate-45 translate-y-2')} />
        <span className={clsx('w-5 h-px bg-ink transition-all', open && 'opacity-0')} />
        <span className={clsx('w-5 h-px bg-ink transition-all', open && '-rotate-45 -translate-y-2')} />
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-surface border-b border-rule py-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-ink font-sans border-b border-rule last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
