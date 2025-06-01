import { useEffect, useRef, RefObject } from 'react'

const useClickOutside = <T extends HTMLElement = HTMLDivElement>(
  onOutsideClick: () => void,
  options?: { disabled?: boolean }
): RefObject<T | null> => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (options?.disabled) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (ref.current && !ref.current.contains(target)) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [onOutsideClick, options?.disabled])

  return ref
}

export default useClickOutside
