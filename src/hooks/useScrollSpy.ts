import { useEffect, useState } from 'react';

/**
 * Retorna o id da seção atualmente visível na tela.
 * @param sectionIds Array de ids das seções na ordem do layout
 * @param offset Ajuste de offset para considerar header fixo, etc (em px)
 */
export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - offset <= 1) {
            current = id;
          }
        }
      }
      setActiveId(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // inicial
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
