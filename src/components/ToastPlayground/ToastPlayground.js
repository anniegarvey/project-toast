import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  const removeToast = id => setToasts(oldToasts => oldToasts.filter(t => t.id !== id));

  const addToast = (e) => {
    e.preventDefault();
    const id = Math.random();
    const toast = {
      message,
      variant,
      id,
      dismiss: () => removeToast(id)
    };
    setToasts([toast, ...toasts]);
    setMessage('');
  }

  return (
    <form className={styles.wrapper} onSubmit={addToast}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.map(t => <Toast key={t.id} {...t} />)}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(v => {
              const id = `variant-${v}`;
              return (
                <label htmlFor={id} key={v}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={variant}
                    onChange={(e) => setVariant(v)}
                  />
                  {v}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
