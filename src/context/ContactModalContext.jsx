import { createContext, useMemo, useState, useCallback } from 'react'

export const ContactModalContext = createContext(null)

// Provides a single shared "Обсудить проект" modal (Scenario B in the brief)
// so any button anywhere in the tree can open it via useContactModal().
export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close])

  return <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>
}
