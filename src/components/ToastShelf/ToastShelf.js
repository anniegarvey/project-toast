import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, id, ...rest }) => (
        <li className={styles.toastWrapper} key={id} >
          <Toast {...rest}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
