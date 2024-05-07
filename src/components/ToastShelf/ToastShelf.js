import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
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
