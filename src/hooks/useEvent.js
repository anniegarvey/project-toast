import React from 'react';

export const useEvent = (event, eventHandler) => {
  React.useEffect(() => {
    document.addEventListener(event, eventHandler);

    return () => document.removeEventListener(event, eventHandler);
  }, [event, eventHandler]);
};

export default useEvent;
