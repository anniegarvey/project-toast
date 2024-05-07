import React from 'react';

import { useEscapeKey } from '../../hooks';

export const ToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const dismissAll = React.useCallback(() => setToasts([]), []);

  useEscapeKey(dismissAll);

  const removeToast = id => setToasts(oldToasts => oldToasts.filter(t => t.id !== id));

  const addToast = React.useCallback(({ message, variant }) => {
    const id = Math.random();
    const toast = {
      message,
      variant,
      id,
      dismiss: () => removeToast(id)
    };
    setToasts(currToasts => [toast, ...currToasts]);
  }, []);

  const value = React.useMemo(() => {
    return {
      toasts,
      addToast
    };
  }, [toasts, addToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}