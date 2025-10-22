import React from 'react';
import ReactDOM from 'react-dom';
import type {ModalProps} from "@/organisms/modal/types.ts";
import styles from "./Modal.module.scss";

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, title }):React.ReactPortal | null => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </header>
        <div className={styles
          .body}>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;