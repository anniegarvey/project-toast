import React from 'react';

import useEvent from './useEvent';

export const useEscapeKey = (eventHandler) => {
  const handler = React.useCallback((e) => {
    if (e.key === 'Escape') {
      eventHandler(e);
    }
  }, [eventHandler]);

  useEvent('keydown', handler);
};
