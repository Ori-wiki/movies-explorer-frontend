import { useEffect } from 'react';

export default function useEscape(callback, dependency) {
  useEffect(() => {
    if (dependency) {
      const onEscClose = ((e) => {
        if (e.key === 'Escape') {
          callback()
        }
      })
      document.addEventListener('keyup', onEscClose);
     
      return () => {
        document.removeEventListener('keyup', onEscClose)
      };
    }
  }, [dependency, callback])
}